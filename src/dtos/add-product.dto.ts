import { ApiProperty } from "@nestjs/swagger";

export class AddProductDto{
    @ApiProperty({
        example: 'Bingo Sıvı Çamaşır Deterjanı Renkli 3 L'
    })
    name: string;

    @ApiProperty({
        example: ''
    })
    imagepath: string;

    @ApiProperty({
        example: 'Bingo'
    })
    brand: string;

    @ApiProperty({
        example: '8690536905133'
    })
    barcode: string;

    @ApiProperty({
        example: '149.50'
    })
    price: number;

    @ApiProperty({
        example: '20.00'
    })
    kdvRatio: number;

    @ApiProperty({
        example: '22002454'
    })
    productCode: number;

    @ApiProperty({
        example: '5000'
    })
    quantity: number;

    @ApiProperty({
        example: 'Ev Bakım & Temizlik'
    })
    category: string;

    @ApiProperty({
        example: 'Çamaşır Toz & Sıvı & Jel Deterjan'
    })
    subcategory: string;
}