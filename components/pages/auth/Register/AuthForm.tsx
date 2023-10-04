import { ValidateInput } from '@/components/ui/Input/ValidateInput';
import { isDuplicatedEmail } from '@/service/auth';
import { validate } from '@/utils/validate';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface Props {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthForm({ setIsActive }: Props) {
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] =
    useState(false);

  const confirmPassword = (value: string) => {
    if (getValues('password') !== value) {
      return '비밀번호가 일치하지 않습니다. 다시 입력해주세요.';
    }
    setConfirmPasswordValidated(true);
    return true;
  };

  const checkDuplicateEmail = useCallback(async (email: string) => {
    try {
      const response = await isDuplicatedEmail(email);
      return !response.duplicate; // 중복되지 않은 경우 true 반환
    } catch (error) {
      console.error('Error checking duplicate email:', error);
      return false; // 오류 발생 시 false 반환
    }
  }, []);

  useEffect(() => {
    setIsActive(isValid);
  }, [isValid]);
  return (
    <form className="w-full">
      <p className="text-grey-400 text-end body4">
        <span className="text-red">*</span>는 필수 입력 정보입니다.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="id" className="body1 text-grey-800">
            아이디<span className="text-red">*</span>
          </label>
          <div className="flex flex-col gap-1">
            <ValidateInput
              type="text"
              id="id"
              success={emailValidated && !errors.email}
              error={!!errors.email}
              placeholder="pawpaw1234@google.com"
              {...register('email', {
                required: true,
                pattern: validate.email,
                validate: async (value) => {
                  if (!value) return true; // 값이 없으면 유효성 검사 통과
                  setEmailValidated(false); // 유효성 체크 시작 시 변수 초기화
                  const isUnique = await checkDuplicateEmail(value); // 이메일 중복 확인
                  setEmailValidated(isUnique); // 중복되지 않은 경우에만 변수 업데이트
                  return (
                    isUnique || '동일한 이메일 주소로 가입된 계정이 있습니다. '
                  );
                },
              })}
            />
            {errors.email && (
              <p className="text-red ">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="password" className="body1 text-grey-800">
            비밀번호<span className="text-red">*</span>
          </label>
          <div className="flex flex-col gap-1">
            <ValidateInput
              type="password"
              id="password"
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
        </div>
        <div className="flex flex-col gap-1">
          <ValidateInput
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
    </form>
  );
}
