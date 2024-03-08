import { ApiProperty } from "@nestjs/swagger";

export class AddMarketDto{
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