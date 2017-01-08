
export class Module1 {
    private field: number = 0;

    public f1(): number {
        this.field++;
        return this.field;
    }
}