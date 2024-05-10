import ResponseDto from "src/apis/response.dto";

// description: 로그인 유저 정보 불러오기 Response Body DTO
export interface GetSignInResponseDto extends ResponseDto{
    userId: string;
    userRole: string;
}