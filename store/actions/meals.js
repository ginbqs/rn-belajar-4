export const TOOGLE_FAVORITE = 'TOOGLE_FAVORITE'
export const SET_FILTERS = 'SET_FILTERS'

export const toogleFavorite = (id) => {
    return {type:TOOGLE_FAVORITE,mealId:id}
}

export const setFilters = filterSetting => {
    return {type:SET_FILTERS,filters:filterSetting}
}