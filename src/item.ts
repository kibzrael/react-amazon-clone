interface ItemInterface{
    title: string;
    price: number;
    rating: number;
    rateCount: number;
    photo: string;

}

class Item {
    title:string;
    price: number;
    rating: number;
    rateCount: number;
    photo: string;

    constructor(props: ItemInterface) {
        this.title=props.title;
        this.price=props.price;
        this.rating=props.rating;
        this.rateCount=props.rateCount;
        this.photo=props.photo;

    }
}


export default Item;