import { useMutation, useQuery } from '@tanstack/react-query';

import { getWalkRecords, postWalkData, patchWalkData } from '@/apis/walkAPI';
import { FormDataPatchType } from '@/components/organisms/walk/WalkModal';
import { FilterType } from '@/types/walk';

export type UseWalkQueryProps = {
  buddyId: number;
  filterKey: FilterType;
  month?: number;
  year?: number;
};

interface useWalkMutationProps {
  onSuccessFn: () => void;
  onErrorFn: () => void;
}
/** getWalkRecords */
export const useWalkQuery = ({ filterKey, buddyId, month, year }: UseWalkQueryProps) => {
  return useQuery({
    queryKey: ['walkRecords', filterKey, buddyId, month, year].filter(Boolean),
    queryFn: () => {
      if (filterKey === 'weekly') return getWalkRecords({ filterKey, buddyId });
      if (filterKey === 'monthly' && month) return getWalkRecords({ filterKey, buddyId, month });
      if (filterKey === 'all' && month && year) return getWalkRecords({ filterKey, buddyId, month, year });
      throw new Error('Invalid filter type');
    },
  });
};

/** 폼 데이터를 서버에 전송하는 뮤테이션 */
export const useWalkMutation = ({ onSuccessFn, onErrorFn }: useWalkMutationProps) => {
  return useMutation({
    mutationFn: (formData: FormData) => postWalkData(formData),
    onSuccess: (status) => {
      if (status === 201 || status === 200) {
        onSuccessFn();
      }
    },
    onError: (error) => {
      console.error('Upload failed:', error);
      onErrorFn();
    },
  });
};

export interface MutationParams {
  formData: FormDataPatchType;
  petId: number;
  recordId: number;
}

/** 수정 뮤테이션 */
export const useWalkPatchMutation = ({ onSuccessFn, onErrorFn }: useWalkMutationProps) => {
  return useMutation({
    mutationFn: ({ formData, petId, recordId }: MutationParams) => patchWalkData({ formData, petId, recordId }),
    onSuccess: (status) => {
      if (status === 201 || status === 200) onSuccessFn();
    },
    onError: (error) => {
      console.error('Upload failed:', error);
      onErrorFn();
    },
  });
};
