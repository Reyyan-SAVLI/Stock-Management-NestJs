import { ApiProperty } from "@nestjs/swagger";

export class AddStorageDto{
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