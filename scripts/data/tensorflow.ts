import { Repo } from ".";

export const tensorFlowRepo: Repo = {
	label: "TensorFlow",
	url: "https://github.com/tensorflow/tensorflow",
	files: [
		{
			path: "/tensorflow/python/autograph/impl/conversion.py",
			code: `
_ALLOWLIST_CACHE = cache.UnboundInstanceCache()

def _is_of_known_loaded_module(f, module_name):
  mod = sys.modules.get(module_name, None)
  if mod is None:
    return False
  if any(v is not None for v in mod.__dict__.values() if f is v):
    return True
  return False

def _is_known_loaded_type(f, module_name, entity_name):
  if (module_name not in sys.modules or
      not hasattr(sys.modules[module_name], entity_name)):
    return False
  type_entity = getattr(sys.modules[module_name], entity_name)
  if isinstance(f, type_entity):
    return True
  if inspect.ismethod(f):
    if isinstance(f.__func__, type_entity):
      return True
  return False
`,
		},
		{
			path: "/tensorflow/python/framework/combinations.py",
			code: `
class EagerGraphCombination(test_combinations.TestCombination):
  """
  The optional \`mode\` parameter controls the test's execution mode.  Its
  accepted values are "graph" or "eager" literals.
  """

  def context_managers(self, kwargs):
    mode = kwargs.pop("mode", None)
    if mode is None:
      return []
    elif mode == "eager":
      return [context.eager_mode()]
    elif mode == "graph":
      return [ops.Graph().as_default(), context.graph_mode()]
    else:
      raise ValueError(
          "Argument 'mode' must be either 'eager' or 'graph'. "
          f"Received: {mode}.")

  def parameter_modifiers(self):
    return [test_combinations.OptionalParameter("mode")]

class TFVersionCombination(test_combinations.TestCombination):
  def should_execute_combination(self, kwargs):
    tf_api_version = kwargs.pop("tf_api_version", None)
    if tf_api_version == 1 and tf2.enabled():
      return (False, "Skipping a TF1.x test when TF2 is enabled.")
    elif tf_api_version == 2 and not tf2.enabled():
      return (False, "Skipping a TF2 test when TF2 is not enabled.")
    return (True, None)
`,
		},
		{
			path: "/tensorflow/core/kernels/linalg/determinant_op.cc",
			code: `
namespace tensorflow {
	template <class Scalar>
	static typename Eigen::NumTraits<Scalar>::Real SLogDet(
			const Eigen::Matrix<Scalar, Eigen::Dynamic, Eigen::Dynamic>& inputs,
			Scalar* sign) {
		using RealScalar = typename Eigen::NumTraits<Scalar>::Real;
		RealScalar log_abs_det = 0;
		*sign = 1;
		if (inputs.size() > 0) {
			using Eigen::Dynamic;
			Eigen::PartialPivLU<Eigen::Matrix<Scalar, Dynamic, Dynamic>> lu(inputs);
			Eigen::Matrix<Scalar, Dynamic, Dynamic> LU = lu.matrixLU();
			*sign = lu.permutationP().determinant();
			auto diag = LU.diagonal().array().eval();
			auto abs_diag = diag.cwiseAbs().eval();
			log_abs_det += abs_diag.log().sum();
			*sign *= (diag / abs_diag).prod();
		}
		if (!Eigen::numext::isfinite(log_abs_det)) {
			*sign = 0;
			log_abs_det =
					log_abs_det > 0 ? -std::log(RealScalar(0)) : std::log(RealScalar(0));
		}
		return log_abs_det;
	}
}
`,
		},
		{
			path: "/tensorflow/core/grappler/graph_topology_view.cc",
			code: `
template <typename T>
inline void SortAndRemoveDuplicates(T* v) {
  std::sort(v->begin(), v->end());
  v->erase(std::unique(v->begin(), v->end()), v->end());
}

Status GraphTopologyView::InitializeFromGraph(
    const GraphDef& graph,
    const absl::Span<const GraphView::Edge> ephemeral_edges,
    bool ignore_control_edges) {
  if (graph_ != nullptr) {
    return errors::InvalidArgument("GraphTopologyView is already initialized.");
  }

  graph_ = &graph;
  num_nodes_ = graph.node_size();
  index_to_node_name_.resize(num_nodes_);
  node_name_to_index_.rehash(num_nodes_);
  fanins_.resize(num_nodes_);
  fanouts_.resize(num_nodes_);

  for (int node_idx = 0; node_idx < num_nodes_; ++node_idx) {
    const NodeDef& node = graph.node(node_idx);
    node_name_to_index_.emplace(node.name(), node_idx);
    index_to_node_name_.emplace_back(node.name());
  }
`,
		},
		{
			path: "/tensorflow/core/common_runtime/gpu/gpu_cudamalloc_allocator.cc",
			code: `
void* GPUcudaMallocAllocator::AllocateRaw(size_t alignment, size_t num_bytes) {
	#ifdef GOOGLE_CUDA
		// allocate with cudaMalloc
		se::cuda::ScopedActivateExecutorContext scoped_activation{stream_exec_};
		CUdeviceptr rv = 0;
		CUresult res = cuMemAlloc(&rv, num_bytes);
		if (res != CUDA_SUCCESS) {
			const char* error_name;
			const char* error_string;
			cuGetErrorName(res, &error_name);
			cuGetErrorString(res, &error_string);
			LOG(ERROR) << "cuMemAlloc failed to allocate " << num_bytes
								 << "\n Error name: " << error_name
								 << "\n Error string: " << error_string;
			return nullptr;
		}
		VLOG(10) << "AllocateRaw " << Name() << "  " << num_bytes << " "
						 << reinterpret_cast<void*>(rv);
		return reinterpret_cast<void*>(rv);
	#else
		return nullptr;
	#endif  // GOOGLE_CUDA
	}
`,
		},
		{
			path: "tensorflow/examples/speech_commands/accuracy_utils.py",
			code: `
			def print_accuracy_stats(self):
			"""Write a human-readable description of the statistics to stdout."""
			if self._how_many_gt == 0:
			  tf.compat.v1.logging.info('No ground truth yet, {}false positives'.format(
				  self._how_many_fp))
			else:
			  any_match_percentage = self._how_many_gt_matched / self._how_many_gt * 100
			  correct_match_percentage = self._how_many_c / self._how_many_gt * 100
			  wrong_match_percentage = self._how_many_w / self._how_many_gt * 100
			  false_positive_percentage = self._how_many_fp / self._how_many_gt * 100
			  tf.compat.v1.logging.info(
				  '{:.1f}% matched, {:.1f}% correct, {:.1f}% wrong, '
				  '{:.1f}% false positive'.format(any_match_percentage,
												  correct_match_percentage,
												  wrong_match_percentage,
												  false_positive_percentage))
		`,
		},
		{
			path: "tensorflow/dtensor/python/accelerator_util.py",
			code: `
			global _INITIALIZED_ACCELERATOR_SYSTEM_TYPE
  			assert context.executing_eagerly()

  			if is_initialized():
    			raise ValueError(
        			"Accelerator system has already been initialized. "
        			"Call tf.experimental.dtensor.shutdown_accelerator_system() first.")

  			if experimental_reset_context:
    			logging.warn(
        			"experimental_reset_context is True. "
        			"Resetting TensorFlow context. Existing TensorFlow objects "
        			"(e.g. Tensors and resources) are invalidated."
    			)
    		context.context().ensure_uninitialized()  # pylint: disable=protected-access

  			if context.context()._initialized:  # pylint: disable=protected-access
    			raise ValueError(
        			"TensorFlow has already been initialized. "
        			"tf.experimental.dtensor.initialize_accelerator_system() must be "
        			"called before TensorFlow is initialized.")

  			context.context()._clear_caches()  # pylint: disable=protected-access

  			if device_type is None:
    			device_type = config.preferred_device_type()

  			device_type = device_type.upper()
  			if device_type not in {"CPU", "GPU", "TPU"}:
    			raise ValueError(f"Unknown device_type {device_type}. "
                     		"Allowed values are CPU, GPU, or TPU")

			`,
		},
		{
			path: "tensorflow/python/framework/auto_control_deps_test.py",
			code: `
			class AutomaticControlDependenciesTest(test.TestCase):

				def setUp(self):
					super().setUp()
					self.must_run_order_insensitive_stateful_ops = (
						acd.MUST_RUN_ORDER_INSENSITIVE_STATEFUL_OPS)

				def tearDown(self):
					acd.MUST_RUN_ORDER_INSENSITIVE_STATEFUL_OPS = (
						self.must_run_order_insensitive_stateful_ops)
					super().tearDown()

				def testBasic(self):
					with context.graph_mode(), self.cached_session():
					v = resource_variable_ops.ResourceVariable(1.0)
					self.evaluate(variables.global_variables_initializer())
					with acd.AutomaticControlDependencies() as c:
						v.assign(v + 1)
						v.assign(2 * v)
						val = v.read_value()
						val = c.mark_as_return(val)
					self.assertAllEqual(val, 4.0)
			`,
		},
	],
};
