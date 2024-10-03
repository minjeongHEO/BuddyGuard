package buddyguard.mybuddyguard.hospital.mapper;

import buddyguard.mybuddyguard.hospital.controller.reponse.HospitalRecordResponse;
import buddyguard.mybuddyguard.hospital.controller.request.HospitalRecordCreateRequest;
import buddyguard.mybuddyguard.hospital.entity.HospitalRecord;

public class HospitalRecordMapper {

    public static HospitalRecordResponse toResponse(HospitalRecord hospitalRecord) {
        return new HospitalRecordResponse(
                hospitalRecord.getId(),
                hospitalRecord.getUserId(),
                hospitalRecord.getPetId(),
                hospitalRecord.getVisitDate(),
                hospitalRecord.getHospitalName(),
                hospitalRecord.getDescription()
        );
    }

    public static HospitalRecord toEntity(Long userId, Long petId, HospitalRecordCreateRequest request) {
        return HospitalRecord.builder()
                .userId(userId)
                .petId(petId)
                .visitDate(request.visitDate())
                .hospitalName(request.hospitalName())
                .description(request.description())
                .build();
    }
}