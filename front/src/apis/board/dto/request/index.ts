// description: Q&A 작성 Request Body Dto
export interface PostBoardRequestDto{
    title: string;
    contents: string;
}

// description: Q&A 수정 Request Body Dto
export interface PutBoardRequestDto{
    title: string;
    contents: string;
}

// description: Q&A 답변 작성 Request Body Dto
export interface PostCommentRequestDto{
    comment: string;
}

