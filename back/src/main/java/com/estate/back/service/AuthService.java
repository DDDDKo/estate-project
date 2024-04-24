package com.estate.back.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.estate.back.dto.request.auth.IdCheckRequestDto;
import com.estate.back.dto.response.ResponseDto;

@Service
public interface AuthService {
    ResponseEntity<ResponseDto> idCheck (IdCheckRequestDto dto);
}
