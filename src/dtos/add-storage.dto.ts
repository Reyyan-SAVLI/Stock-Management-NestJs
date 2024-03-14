import { ApiProperty } from "@nestjs/swagger";
import { AddProductDto } from "./add-product.dto";

export class AddStorageDto extends AddProductDto{
    @ApiProperty({
        example: 'Adana Bölge Müdürlüğü'
    })
    storageName: string;

    @ApiProperty({
        example: 3101
    })
    storageCode: number;

    @ApiProperty({
        example: 'Adana'
    })
    city: string;

    @ApiProperty({
        example: 'Yüreğir'
    })
    province: string;

    @ApiProperty({
        example: 'Hacı Sabancı Organize Sanayi Bölgesi Celal Bayar Bulvarı No: 33'
    })
    address: string;
}