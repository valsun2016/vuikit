import ElSkeleton from './skeleton'
import { mergeData } from 'vuikit/src/_core/utils/vue'
import { assign } from 'vuikit/src/_core/utils/lang'

export default {
  functional: true,
  props: assign({}, ElSkeleton.props, {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 120
    }
  }),
  render (h, { data, props }) {
    return h(ElSkeleton, mergeData(data, {
      class: 'vk-skeleton-image',
      props
    }))
  }
}