import { Repo } from ".";

export const linuxRepo: Repo = {
	label: "Linux Kernel",
	url: "https://github.com/torvalds/linux",
	files: [
		{
			path: "/linux/kernel/futex/core.c",
			code: `
static struct {
	struct futex_hash_bucket *queues;
	unsigned long            hashsize;
} __futex_data __read_mostly __aligned(2*sizeof(long));

#define futex_queues   (__futex_data.queues)
#define futex_hashsize (__futex_data.hashsize)

#ifdef CONFIG_FAIL_FUTEX

static struct {
	struct fault_attr attr;

	bool ignore_private;
} fail_futex = {
	.attr = FAULT_ATTR_INITIALIZER,
	.ignore_private = false,
};

static int __init setup_fail_futex(char *str)
{
	return setup_fault_attr(&fail_futex.attr, str);
}
__setup("fail_futex=", setup_fail_futex);

bool should_fail_futex(bool fshared)
{
	if (fail_futex.ignore_private && !fshared)
		return false;

	return should_fail(&fail_futex.attr, 1);
}

#ifdef CONFIG_FAULT_INJECTION_DEBUG_FS

static int __init fail_futex_debugfs(void)
{
	umode_t mode = S_IFREG | S_IRUSR | S_IWUSR;
	struct dentry *dir;

	dir = fault_create_debugfs_attr("fail_futex", NULL,
					&fail_futex.attr);
	if (IS_ERR(dir))
		return PTR_ERR(dir);

	debugfs_create_bool("ignore-private", mode, dir,
			    &fail_futex.ignore_private);
	return 0;
}`
		},
		{
			path: "/crypto/aegis128-core.c",
			code:
				`
static void crypto_aegis128_update(struct aegis_state *state)
{
	union aegis_block tmp;
	unsigned int i;

	tmp = state->blocks[AEGIS128_STATE_BLOCKS - 1];
	for (i = AEGIS128_STATE_BLOCKS - 1; i > 0; i--)
		crypto_aegis_aesenc(&state->blocks[i], &state->blocks[i - 1],
				    &state->blocks[i]);
	crypto_aegis_aesenc(&state->blocks[0], &tmp, &state->blocks[0]);
}

static void crypto_aegis128_update_a(struct aegis_state *state,
				     const union aegis_block *msg,
				     bool do_simd)
{
	if (IS_ENABLED(CONFIG_CRYPTO_AEGIS128_SIMD) && do_simd) {
		crypto_aegis128_update_simd(state, msg);
		return;
	}

	crypto_aegis128_update(state);
	crypto_aegis_block_xor(&state->blocks[0], msg);
}

static void crypto_aegis128_update_u(struct aegis_state *state, const void *msg,
				     bool do_simd)
{
	if (IS_ENABLED(CONFIG_CRYPTO_AEGIS128_SIMD) && do_simd) {
		crypto_aegis128_update_simd(state, msg);
		return;
	}

	crypto_aegis128_update(state);
	crypto_xor(state->blocks[0].bytes, msg, AEGIS_BLOCK_SIZE);
}
`
		},
		{
			path: "/drivers/base/bus.c",
			code:
				`
static struct subsys_private *bus_to_subsys(const struct bus_type *bus)
{
	struct subsys_private *sp = NULL;
	struct kobject *kobj;

	if (!bus || !bus_kset)
		return NULL;

	spin_lock(&bus_kset->list_lock);

	if (list_empty(&bus_kset->list))
		goto done;

	list_for_each_entry(kobj, &bus_kset->list, entry) {
		struct kset *kset = container_of(kobj, struct kset, kobj);

		sp = container_of_const(kset, struct subsys_private, subsys);
		if (sp->bus == bus)
			goto done;
	}
	sp = NULL;
done:
	sp = subsys_get(sp);
	spin_unlock(&bus_kset->list_lock);
	return sp;
}

static struct bus_type *bus_get(struct bus_type *bus)
{
	struct subsys_private *sp = bus_to_subsys(bus);

	if (sp)
		return bus;
	return NULL;
}
`
		},
		{
			path: "/mm/compaction.c",
			code:
				`
static void split_map_pages(struct list_head *list)
{
	unsigned int i, order, nr_pages;
	struct page *page, *next;
	LIST_HEAD(tmp_list);

	list_for_each_entry_safe(page, next, list, lru) {
		list_del(&page->lru);

		order = page_private(page);
		nr_pages = 1 << order;

		post_alloc_hook(page, order, __GFP_MOVABLE);
		if (order)
			split_page(page, order);

		for (i = 0; i < nr_pages; i++) {
			list_add(&page->lru, &tmp_list);
			page++;
		}
	}

	list_splice(&tmp_list, list);
}

bool PageMovable(struct page *page)
{
	const struct movable_operations *mops;

	VM_BUG_ON_PAGE(!PageLocked(page), page);
	if (!__PageMovable(page))
		return false;

	mops = page_movable_ops(page);
	if (mops)
		return true;

	return false;
}
`
		},
		{
			path: "/sound/firewire/amdtp-stream.c",
			code:
				`
int amdtp_stream_set_parameters(struct amdtp_stream *s, unsigned int rate,
				unsigned int data_block_quadlets, unsigned int pcm_frame_multiplier)
{
	unsigned int sfc;
	for (sfc = 0; sfc < ARRAY_SIZE(amdtp_rate_table); ++sfc) {
		if (amdtp_rate_table[sfc] == rate)
			break;
	}
	if (sfc == ARRAY_SIZE(amdtp_rate_table))
		return -EINVAL;
	s->sfc = sfc;
	s->data_block_quadlets = data_block_quadlets;
	s->syt_interval = amdtp_syt_intervals[sfc];
	s->transfer_delay = TRANSFER_DELAY_TICKS - TICKS_PER_CYCLE;
	if (s->flags & CIP_BLOCKING)
		s->transfer_delay += TICKS_PER_SECOND * s->syt_interval / rate;

	s->pcm_frame_multiplier = pcm_frame_multiplier;

	return 0;
}
EXPORT_SYMBOL(amdtp_stream_set_parameters);
static int amdtp_stream_get_max_ctx_payload_size(struct amdtp_stream *s)
{
	unsigned int multiplier;
	if (s->flags & CIP_JUMBO_PAYLOAD)
		multiplier = IR_JUMBO_PAYLOAD_MAX_SKIP_CYCLES;
	else
		multiplier = 1;
	return s->syt_interval * s->data_block_quadlets * sizeof(__be32) * multiplier;
}
`
		}
	]
}
