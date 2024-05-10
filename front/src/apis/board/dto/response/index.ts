import ResponseDto from "src/apis/response.dto";
import { BoardListItem } from "src/types";

// description: Q&A 게시물 리스트 불러오기 Response Body DTO 
export interface GetBoardListResponseDto extends ResponseDto {
    boardList: BoardListItem[];
}

// description: Q&A 검색 게시물 리스트 불러오기 Response Body DTO 
export interface GetSearchBoardListResponseDto extends ResponseDto {
    boardList: BoardListItem[];
}

// description: Q&A 게시물 불러오기 Response Body DTO 
export interface GetBoardResponseDto extends ResponseDto {
    receptionNumber: number;
    status: boolean;
    title: string;
    writerId: string;
    writeDatetime: string;
    viewCount: number;
    contents: string;
    comment: string | null;
}