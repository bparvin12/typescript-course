import fs from 'fs';

// by convention TypeOfData is just refered to as <T>
export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
