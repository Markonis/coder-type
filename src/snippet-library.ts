import { Snippet } from "./types";

export const snippets: Snippet[] = [
  {
    label: "React Compiler Runtime",
    url: "https://github.com/facebook/react/blob/main/compiler/packages/react-compiler-runtime/src/index.ts",
    language: "typescript",
    text: `export function $dispatcherGuard(kind: GuardKind) {
  const curr = ReactSecretInternals.ReactCurrentDispatcher.current;
  if (kind === GuardKind.PushGuardContext) {
    // Push before checking invariant or errors
    guardFrames.push(curr);

    if (guardFrames.length === 1) {
      // save if we're the first guard on the stack
      originalDispatcher = curr;
    }`,
  },
  {
    label: "Svelte Internal API",
    url: "https://github.com/sveltejs/svelte/blob/main/packages/svelte/src/internal/server/blocks/snippet.js",
    language: "javascript",
    text: `export function createRawSnippet(fn) {
	// @ts-expect-error the types are a lie
	return (/** @type {Payload} */ payload, /** @type {Params} */ ...args) => {
		var getters = /** @type {Getters<Params>} */ (args.map((value) => () => value));
		payload.out.push(
			fn(...getters)
				.render()
				.trim()
		);
	};
}`,
  },
  {
    label: "Rust Borrow Checker",
    url: "https://github.com/rust-lang/rust/blob/master/compiler/rustc_borrowck/src/borrow_set.rs",
    language: "rust",
    text: `impl<'tcx> fmt::Display for BorrowData<'tcx> {
    fn fmt(&self, w: &mut fmt::Formatter<'_>) -> fmt::Result {
        let kind = match self.kind {
            mir::BorrowKind::Shared => "",
            mir::BorrowKind::Fake(mir::FakeBorrowKind::Deep) => "fake ",
            mir::BorrowKind::Fake(mir::FakeBorrowKind::Shallow) => "fake shallow ",
            mir::BorrowKind::Mut { kind: mir::MutBorrowKind::ClosureCapture } => "uniq ",
            // FIXME: differentiate \`TwoPhaseBorrow\`
            mir::BorrowKind::Mut {
                kind: mir::MutBorrowKind::Default | mir::MutBorrowKind::TwoPhaseBorrow,
            } => "mut ",
        };
        write!(w, "&{:?} {}{:?}", self.region, kind, self.borrowed_place)
    }
}`
  },
  {
    label: "Rust Lang Parser",
    url: "https://github.com/rust-lang/rust/blob/master/compiler/rustc_parse/src/lib.rs",
    language: "rust",
    text: `fn new_parser_from_source_file(
    psess: &ParseSess,
    source_file: Arc<SourceFile>,
    strip_tokens: StripTokens,
) -> Result<Parser<'_>, Vec<Diag<'_>>> {
    let end_pos = source_file.end_position();
    let stream = source_file_to_stream(psess, source_file, None, strip_tokens)?;
    let mut parser = Parser::new(psess, stream, None);
    if parser.token == token::Eof {
        parser.token.span = Span::new(end_pos, end_pos, parser.token.span.ctxt(), None);
    }
    Ok(parser)
}`
  },
  {
    label: "Pytorch Tensor Quantization",
    url: "https://github.com/pytorch/pytorch/blob/main/torch/distributed/algorithms/_quantization/quantization.py",
    language: "python",
    text: `def _quantize_tensor(tensor, qtype):
    if not isinstance(tensor, torch.Tensor):
        raise RuntimeError(
            f"_quantize_tensor expecting torch.Tensor as input but found {type(tensor)}"
        )
    if qtype == DQuantType.FP16:
        return _fp32_to_fp16_with_clamp(tensor)
    elif qtype == DQuantType.BFP16:
        return torch.ops.quantization._FloatToBfloat16Quantized(tensor)
    else:
        raise RuntimeError(f"Quantization type {qtype} is not supported")`
  },
  {
    label: "Scipy Interpolative Matrix Decomposition",
    url: "https://github.com/scipy/scipy/blob/main/scipy/linalg/_decomp_interpolative.pyx",
    language: "python",
    text: `def idd_diffsnorm(A: LinearOperator, B: LinearOperator, *, rng, int its=20):
    cdef int n = A.shape[1], j = 0, intone = 1
    cdef cnp.float64_t snorm = 0.0
    cdef cnp.ndarray[cnp.float64_t, mode='c', ndim=1] v1
    cdef cnp.ndarray[cnp.float64_t, mode='c', ndim=1] v2
    cdef cnp.ndarray[cnp.float64_t, mode='c', ndim=1] u1
    cdef cnp.ndarray[cnp.float64_t, mode='c', ndim=1] u2

    v1 = rng.uniform(low=-1., high=1., size=n)
    v1 /= dnrm2(&n, &v1[0], &intone)

    for j in range(its):
        u1 = A.matvec(v1)
        u2 = B.matvec(v1)
        u1 -= u2
        v1 = A.rmatvec(u1)
        v2 = B.rmatvec(u1)
        v1 -= v2

        snorm = dnrm2(&n, &v1[0], &intone)
        if snorm > 0.0:
            v1 /= snorm

        snorm = np.sqrt(snorm)

    return snorm`
  },
  {
    label: "Linux Kernel Live Patching Functions",
    url: "https://github.com/torvalds/linux/blob/master/kernel/livepatch/patch.c",
    language: "cpp",
    text: `struct klp_ops *klp_find_ops(void *old_func)
{
	struct klp_ops *ops;
	struct klp_func *func;

	list_for_each_entry(ops, &klp_ops, node) {
		func = list_first_entry(&ops->func_stack, struct klp_func,
					stack_node);
		if (func->old_func == old_func)
			return ops;
	}

	return NULL;
}`
  },
  {
    label: "Linux Kernel Mutex Initialization",
    url: "https://github.com/torvalds/linux/blob/master/kernel/locking/mutex.c",
    language: "cpp",
    text: `void
__mutex_init(struct mutex *lock, const char *name, struct lock_class_key *key)
{
	atomic_long_set(&lock->owner, 0);
	raw_spin_lock_init(&lock->wait_lock);
	INIT_LIST_HEAD(&lock->wait_list);
#ifdef CONFIG_MUTEX_SPIN_ON_OWNER
	osq_lock_init(&lock->osq);
#endif

	debug_mutex_init(lock, name, key);
}`
  },
  {
    label: "Ruby on Rails Active Record Has Many",
    url: "https://github.com/rails/rails/blob/main/activerecord/lib/active_record/associations/has_many_association.rb",
    language: "ruby",
    text: `class HasManyAssociation < CollectionAssociation # :nodoc:
  include ForeignAssociation

  def handle_dependency
    case options[:dependent]
    when :restrict_with_exception
      raise ActiveRecord::DeleteRestrictionError.new(reflection.name) unless empty?

    when :restrict_with_error
      unless empty?
        record = owner.class.human_attribute_name(reflection.name).downcase
        owner.errors.add(:base, :'restrict_dependent_destroy.has_many', record: record)
        throw(:abort)
      end

    when :destroy
      # No point in executing the counter update since we're going to destroy the parent anyway
      load_target.each { |t| t.destroyed_by_association = reflection }
      destroy_all
    # ...`
  },
  {
    label: "Ruby Lang Arrays",
    url: "https://github.com/ruby/ruby/blob/master/array.c",
    language: "cpp",
    text: `static VALUE
ary_verify_(VALUE ary, const char *file, int line)
{
    RUBY_ASSERT(RB_TYPE_P(ary, T_ARRAY));

    if (ARY_SHARED_P(ary)) {
        VALUE root = ARY_SHARED_ROOT(ary);
        const VALUE *ptr = ARY_HEAP_PTR(ary);
        const VALUE *root_ptr = RARRAY_CONST_PTR(root);
        long len = ARY_HEAP_LEN(ary), root_len = RARRAY_LEN(root);
        RUBY_ASSERT(ARY_SHARED_ROOT_P(root) || OBJ_FROZEN(root));
        RUBY_ASSERT(root_ptr <= ptr && ptr + len <= root_ptr + root_len);
        ary_verify(root);
    }
    else if (ARY_EMBED_P(ary)) {
        RUBY_ASSERT(!ARY_SHARED_P(ary));
        RUBY_ASSERT(RARRAY_LEN(ary) <= ary_embed_capa(ary));
    }
    else {
        const VALUE *ptr = RARRAY_CONST_PTR(ary);
        long i, len = RARRAY_LEN(ary);
        volatile VALUE v;
        if (len > 1) len = 1; /* check only HEAD */
        for (i=0; i<len; i++) {
            v = ptr[i]; /* access check */
        }
        v = v;
    }

    return ary;
}`
  },
  {
    label: "Deno Inspector Server",
    url: "",
    language: "rust",
    text: `pub struct InspectorServer {
  pub host: SocketAddr,
  register_inspector_tx: UnboundedSender<InspectorInfo>,
  shutdown_server_tx: Option<broadcast::Sender<()>>,
  thread_handle: Option<thread::JoinHandle<()>>,
}

#[derive(Debug, thiserror::Error, deno_error::JsError)]
pub enum InspectorServerError {
  #[class(inherit)]
  #[error(transparent)]
  Io(#[from] std::io::Error),
  #[class(inherit)]
  #[error("Failed to start inspector server at \"{host}\"")]
  Connect {
    host: SocketAddr,
    #[source]
    #[inherit]
    source: std::io::Error,
  },
}`
  },
  {
    label: "Java Hibernate Cache Helper",
    url: "",
    language: "java",
    text: `public static Object fromSharedCache(
			SharedSessionContractImplementor session,
			Object cacheKey,
			EntityPersister persister,
			boolean isNaturalKey,
			CachedDomainDataAccess cacheAccess) {
		final var eventListenerManager = session.getEventListenerManager();
		Object cachedValue = null;
		eventListenerManager.cacheGetStart();
		final var eventMonitor = session.getEventMonitor();
		final var cacheGetEvent = eventMonitor.beginCacheGetEvent();
		try {
			cachedValue = cacheAccess.get( session, cacheKey );
		}
		finally {
			eventMonitor.completeCacheGetEvent(
					cacheGetEvent,
					session,
					cacheAccess.getRegion(),
					persister,
					isNaturalKey,
					cachedValue != null
			);
			eventListenerManager.cacheGetEnd( cachedValue != null );
		}
		return cachedValue;
	}`
  },
  {
    label: "OneMenu Window Manager",
    url: "https://coffeebreak.software/one-menu",
    language: "swift",
    text: `private class AnchorsCache {
    private var groupsByScreenSize: [String: CachedAnchorGroups] = [:]

    func getAnchorGroups(_ screenSize: CGSize) -> [String: [Anchor]] {
        let updated = windowManagerPreferences.value.updated
        let key = "\(screenSize.width):\(screenSize.height)"
        if let groups = groupsByScreenSize[key], groups.created > updated {
            return groups.anchorGroups
        } else {
            let areas = getWindowAreasToConsider()
            let groups = computeAnchorGroups(areas, screenSize)
            groupsByScreenSize[key] = CachedAnchorGroups(anchorGroups: groups)
            return groups
        }
    }
}`
  },
];
