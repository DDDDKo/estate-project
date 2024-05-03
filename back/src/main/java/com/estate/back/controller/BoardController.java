package com.estate.back.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.back.dto.request.board.PostBoardReqeustDto;
import com.estate.back.dto.response.ResponseDto;
import com.estate.back.dto.response.board.GetBoardListResponseDto;
import com.estate.back.service.BoardService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/")
    public ResponseEntity<ResponseDto> postBoard (
        @RequestBody @Valid PostBoardReqeustDto dto, 
        @AuthenticationPrincipal String userId
    ){
        ResponseEntity<ResponseDto> response = boardService.postBoard(dto, userId);
        return response;
    }

    @GetMapping("/list")
    public ResponseEntity<? super GetBoardListResponseDto> getBoard () {
        ResponseEntity<? super GetBoardListResponseDto> response = boardService.getBoard();
        return response;
    }
}
