export interface IBook {
    id: number,
    title: string,
    author: string,
    categoryid: number,
    price: number
}

export interface ICategory {
    id: number,
    name: string
}