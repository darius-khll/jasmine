
export class MyModule {
    private someField: number = 0;

    public syncMethod(): number {
        this.someField++;
        return this.someField;
    }

    public async asyncMethod(num: number): Promise<number> {
        return new Promise<number>((res, rej) => {
            setTimeout(() => {
                res(10 + 1);
            }, 100);
        })
    }
}

export function globalMethod(): string {
    return 'wow';
}