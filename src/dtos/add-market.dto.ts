import { ApiProperty } from "@nestjs/swagger";
import { AddProductDto } from "./add-product.dto";

export class AddMarketDto extends AddProductDto{
    @ApiProperty({
        example: 'Aladağ Adana'
    })
    marketName: string;

    @ApiProperty({
        example: 1101
    })
    marketCode: number;

    @ApiProperty({
        example: 'Adana'
    })
    city: string;

    @ApiProperty({
        example: 'Aladağ'
    })
    province: string;

    @ApiProperty({
        example: 'Sinanpaşa Mah. İnönü Cad. No:10'
    })
    address: string;
}