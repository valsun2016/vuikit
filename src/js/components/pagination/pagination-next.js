import { IconPaginationNext } from '@vuikit/icons'

export default {
  functional: true,
  props: ['label', 'expand'],
  render (h, { props, parent }) {
    const { label, expand } = props

    // if not rendered by VkPagination, return comment to mark the position
    if (!(parent.$options && parent.$options._componentTag === 'vk-pagination')) {
      return h('li', { attrs: { label, expand } }, 'next')
    }

    return h('li', {
      class: {
        'uk-disabled': parent.nextPage > parent.lastPage,
        'uk-margin-auto-left': expand !== undefined
      }
    }, [
      h('a', {
        on: { click: e => parent.$emit('update:page', parent.nextPage) }
      }, [
        label && label,
        h('span', {
          staticClass: 'uk-icon uk-pagination-next',
          class: {
            'uk-margin-small-left': label
          }
        }, [ h(IconPaginationNext) ])
      ])
    ])
  }
}
