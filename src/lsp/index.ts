class Rectangle {
    #width: number;
    #height: number;
    constructor() {
        this.#width = 0;
        this.#height = 0;
    }
    set width(width: number): void {
        this.#width = width;
    }

    set height(height: number): void {
        this.#height = height;
    }

    public getArea(): number{
        return this.#width * this.#height;
    }
}

