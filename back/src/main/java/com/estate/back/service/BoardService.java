package com.estate.back.service;

import org.springframework.http.ResponseEntity;

import com.estate.back.dto.request.board.PostBoardReqeustDto;
import com.estate.back.dto.response.ResponseDto;
import com.estate.back.dto.response.board.GetBoardListResponseDto;

public interface BoardService {
    ResponseEntity<ResponseDto> postBoard (PostBoardReqeustDto dto, String userId);
    ResponseEntity<? super GetBoardListResponseDto> getBoard ();
}
