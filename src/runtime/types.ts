export interface BreadcrumbProps {
  /**
   * The Aria Label for the breadcrumbs.
   * You shouldn't need to change this.
   *
   * @default Breadcrumbs
   */
  ariaLabel?: string
  /**
   * The type of current location the breadcrumb item represents, if `isCurrent` is true.
   * @default 'page'
   */
  ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | boolean | 'true' | 'false'
  /**
   * Use an icon be used for the home breadcrumb item.
   * @default true
   */
  homeIcon?: boolean
  /**
   * Should the current breadcrumb item be shown.
   *
   * @default false
   */
  hideCurrent?: boolean
  /**
   * Should the separator be hidden.
   *
   * @default false
   */
  hideSeparator?: boolean
  /**
   * The path of the current breadcrumb item.
   */
  current?: string
  showAtRoot?: boolean
  items?: (string | BreadcrumbItemProps)[]
  ui?: {
    separator?: string | string[]
    icon?: string | string[]
    list?: string | string[]
    nav?: string | string[]
    item?: {
      default?: string | string[]
      current?: string | string[]
      disabled?: string | string[]
    }
  }
}

export interface BreadcrumbItemProps {
  /** Whether the breadcrumb item represents the aria-current. */
  current?: boolean
  /** Whether the breadcrumb item is disabled. */
  disabled?: boolean
  to: string
  label?: string | false
  ariaLabel?: string
  separator?: string
  icon?: string
  /**
   * Should the separator be hidden.
   *
   * @default false
   */
  hideSeparator?: boolean
  ui?: {
    default?: string
    current?: string
    disabled?: string
  }
}
