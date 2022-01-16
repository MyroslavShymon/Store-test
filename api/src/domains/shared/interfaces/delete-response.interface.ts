import {ApiProperty} from "@nestjs/swagger";
import {DeleteResult} from "typeorm";

export interface BaseDeleteResponseInterface {
    raw: any;
    affected?: number | null;
    message: string;
}

export class BaseDeleteResponse implements BaseDeleteResponseInterface {
    @ApiProperty({
        example: '[]',
        description: 'Rows',
    })
    raw: any;
    @ApiProperty({
        example: 4,
        description: 'Count of deleted rows',
    })
    affected?: number | null;

    @ApiProperty({
        example: 'Data was delete success',
        description: 'Delete message',
    })
    message: string;

    formDeleteMessage({
                          message,
                          affected,
                      }: BaseDeleteResponseInterface): string {
        if (affected === 0) {
            return 'Nothing to delete';
        }
        if (message) {
            return message;
        }
        return 'Data was delete success';
    }

    constructor(deleteResult: DeleteResult, message?: string) {
        this.affected = deleteResult.affected;
        this.raw = deleteResult.raw;
        this.message = this.formDeleteMessage({message, ...deleteResult});
    }
}
