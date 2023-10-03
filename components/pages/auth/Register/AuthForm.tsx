import { ValidateInput } from '@/components/ui/Input/ValidateInput';
import { validate } from '@/utils/validate';
import { useEffect, useState } from 'react';
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
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting, isValid },
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
  useEffect(() => {
    isValid ? setIsActive(true) : setIsActive(false);
  }, [isValid]);
  return (
    <form className="w-full">
      <p className="text-grey-400 text-end">
        <span className="text-red">*</span>는 필수 입력 정보입니다.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="id">
            아이디<span className="text-red">*</span>
          </label>
          <div className="flex flex-col gap-1">
            <ValidateInput
              type="text"
              id="id"
              success={emailValidated}
              error={!!errors.email}
              placeholder="pawpaw1234@google.com"
              {...register('email', {
                required: true,
                pattern: validate.email,
                validate: () => {
                  setEmailValidated(true); // 유효성 체크 완료 시 변수 업데이트
                  return true; // 유효성 검사 결과 반환
                },
              })}
            />
            {errors.email && (
              <p className="text-red ">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">
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
