type Currency = 'MXN' | 'USD'

interface Price {
    number: number,
    currency: Currency
}

interface ExpenseItem {
    id: number,
    title: string,
    cost: Price
}

interface IExpenses {
    expenses: ArrayList<ExpenseItem>,
    finalCurrency: Currency,
    add(item:ExpenseItem): boolean,
    get(index: number): ExpenseItem | null,
    getTotal(): string,
    remove(id: number): boolean
}

class ArrayList<T> {
    private items: T[];

    constructor() {
        this.items = []
    }

    add(item: T): void {
        this.items.push(item);
    }

    get(index:number): T | null {
        const item = this.items.filter((x, i) => {
            return i === index;
        });

        if (item.length === 0) {
            return null;
        }
        else {
            return item[0];
        }
    }

    createFrom(value: T[]): void {
        this.items = [...value];
    }

    getAll(): T[] {
        return this.items;
    }
}

class Expenses implements IExpenses {
    expenses: ArrayList<ExpenseItem>;
    finalCurrency: Currency;
    private count: number = 0;

    constructor(currency: Currency) {
        this.expenses = new ArrayList<ExpenseItem>();
        this.finalCurrency = currency;
    }

    add(item: ExpenseItem): boolean {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return true;
    }
    get(index: number): ExpenseItem | null {
        return this.expenses.get(index);
    }
    getTotal(): string {
        throw new Error("Method not implemented.");
    }
    remove(id: number): boolean {
        throw new Error("Method not implemented.");
    }

}