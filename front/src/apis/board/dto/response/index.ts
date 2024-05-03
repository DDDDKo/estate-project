import ResponseDto from "src/apis/response.dto";
import { BoardListItem } from "src/types";

export interface GetBoardListResponseDto extends ResponseDto {
    boardListItems: BoardListItem[];
}

export interface GetSearchBoardListResponseDto extends ResponseDto {
    boardListItems: BoardListItem[];
}