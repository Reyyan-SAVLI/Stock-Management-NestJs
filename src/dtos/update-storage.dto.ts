import { ApiProperty } from "@nestjs/swagger";


export class UpdateStorageDto{
    @ApiProperty({
        example: 'Adana Bölge Müdürlüğü'
    })
    storageName: string;

    @ApiProperty({
        example: 3101
    })
    storageCode: number;

    @ApiProperty({
        example: 'Bingo Sıvı Çamaşır Deterjanı Renkli 3 L'
    })
    productName: string;

    @ApiProperty({
        example: 22002454
    })
    productCode: number;

    @ApiProperty({
        example: 2000
    })
    quantity: number;
}