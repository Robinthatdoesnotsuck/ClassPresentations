
const default_price: number = 0;
let quantity_per_algo: number = 0;
let array_list: number[] = [0, 1, 2];
let array_generic: Array<number> = [];
let object = { name: "algo", price: 2 };
const c_like_struct: { name: string; price: number } =
{
    name: "super_table",
    price: 0
};


type Process = (quantity: number) => void;
type Product = {
    name: string; price: number, process: Process;
}
type SubProduct = Product & { subProductTag: string }

let sub_product: SubProduct = {
    name: "otherthing",
    price: 200,
    process: (quantity) => console.log(""),
    subProductTag: "otherotherthing"
};
type downloadPaths = "one" | "two" | "three" | 1 | 2;
let otherValue: downloadPaths = "one";
function calculateSomething(product: { name: string; price: number }, quantity: number, dataObject: unknown): number {
    const total = product.price * quantity;
    let sub_total: number;

    return total;
}