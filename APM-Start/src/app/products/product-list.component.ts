import { Component, OnInit } from '@angular/core';
//OnInit is a lifecycle hook
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { //after oninit, must have all functions defined by it
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;//property with getter and setter
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        //if no filter, show all; else show the filtered list
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];
    //private _productService;
    constructor(private _productService: ProductService) {
        //in parameter same as
        //_productService = ProductService;
        //registe injector from provider
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();//case insensitive compare
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {//ng stand for angular, hook to performe on initial
        console.log('In OnInit');
        //retrieve data from service use observable
        //similar to promise, but not garuentee a result
        //Async, if subscribe is not called, function will not be returned
        this._productService.getProducts()
                .subscribe(products => {
                    //ValueFn
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                    //ErrorFn
                    error => this.errorMessage = <any>error);
    }
}
