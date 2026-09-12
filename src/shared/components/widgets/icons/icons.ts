export const ICONS = {
    heartOutline: 'heart-outline',
    heart: 'heart',
    search: 'search',
    shoppingBag: 'shopping-bag',
    user: 'user',
    close: 'close',
    plus: 'plus',
    minus: 'minus',
    arrowRight: 'arrow-right',
    arrowLeft: 'arrow-left'
} as const;

export type IconName = typeof ICONS[keyof typeof ICONS];