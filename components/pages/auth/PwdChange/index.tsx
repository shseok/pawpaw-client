'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import Toast from '@/utils/notification';
import { validate } from '@/utils/validate';
import { changePassword } from '@/service/auth';
import { ValidateInput } from '@/components/ui/Input/ValidateInput';
import BottomButton from '../BottomButton';

interface Inputs {
  password: string;
  passwordConfirm: string;
}

export default function PwdChangeForm() {
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] =
    useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const key = searchParams.get('key');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const handleFindChange: SubmitHandler<Inputs> = async (data) => {
    if (!key) {
      alert('key가 존재하지 않습니다.');
      return;
    }
    try {
      await changePassword({ key, password: data.password });
      router.push('/auth/email-login');
    } catch (e) {
      if (e instanceof Error) {
        Toast.error(e.message);
      }
    }
  };

  const confirmPassword = (value: string) => {
    if (getValues('password') !== value) {
      return '비밀번호가 일치하지 않습니다. 다시 입력해주세요.';
    }
    setConfirmPasswordValidated(true);
    return true;
  };

  return (
    <form onSubmit={handleSubmit(handleFindChange)}>
      <div className="flex flex-col gap-5 mt-10">
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <div className="flex flex-col gap-2">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="password" className="body1 text-grey-800">
            새 비밀번호<span className="text-red">*</span>
          </label>
          <div className="flex flex-col gap-1">
            <ValidateInput
              id="password"
              type="password"
              placeholder="비밀번호(10자 이상의 영문,숫자)"
              success={passwordValidated && !errors.password}
              error={!!errors.password}
              {...register('password', {
                required: true,
                minLength: {
                  value: 10,
                  message: '10자리 이상 비밀번호를 입력하세요.',
                },
                pattern: validate.password,
                validate: () => {
                  setPasswordValidated(true);
                  return true;
                },
              })}
            />
            {errors.password && (
              <p className="text-red">{errors.password.message}</p>
            )}
          </div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            <label htmlFor="password-confirm" className="body1 text-grey-800">
              비밀번호 확인<span className="text-red">*</span>
            </label>
            <div className="flex flex-col gap-1">
              <ValidateInput
                id="password-confirm"
                type="password"
                placeholder="비밀번호 확인"
                success={confirmPasswordValidated && !errors.passwordConfirm}
                error={!!errors.passwordConfirm}
                {...register('passwordConfirm', {
                  required: true,
                  validate: {
                    check: confirmPassword,
                  },
                })}
              />
              {errors.passwordConfirm && (
                <p className="text-red">{errors.passwordConfirm.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-[140px]">
          <BottomButton
            isDisabled={!isValid}
            type="submit"
            text="확인"
            isFullWidth
            variant="primary"
          />
        </div>
      </div>
    </form>
  );
}
