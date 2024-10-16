package buddyguard.mybuddyguard.walk.controller.request;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;

public record WalkRecordCreateRequest(
        @NotNull
        String buddyIds,      // 선택한 반려동물들의 ID 배열 (문자열)
        @NotNull
        LocalDate startDate,  // 산책 시작 날짜
        @NotNull
        LocalDate endDate,    // 산책 종료 날짜
        @NotNull
        LocalTime startTime,  // 산책 시작 시간
        @NotNull
        LocalTime endTime,    // 산책 종료 시간
        @NotNull
        String totalTime,     // 총 산책 시간 (00:00:46 형식의 문자열)
        @NotNull
        String note,          // 산책에 대한 메모
        @NotNull
        String centerPosition, // 중심 위치 (위도, 경도)
        @NotNull
        Integer mapLevel,     // 지도 레벨
        @NotNull
        String path,          // 산책 경로 (위도, 경도 배열)
        @NotNull
        Double distance       // 총 거리 (km 단위)
) {}