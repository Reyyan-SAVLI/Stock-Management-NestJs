import { ApiProperty } from "@nestjs/swagger";


export class UpdateMarketDto{
    @ApiProperty({
        example: 'Aladağ Adana'
    })
    marketName: string;

    @ApiProperty({
        example: 1101
    })
    marketCode: number;

    @ApiProperty({
        example: 'Bingo Sıvı Çamaşır Deterjanı Renkli 3 L'
    })
    productName: string;

    @ApiProperty({
        example: 22002454
    })
    productCode: number;

    @ApiProperty({
        example: 1000
    })
    quantity: number;
}