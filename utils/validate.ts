const EMAIL_REGEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// Password must contain letters and numbers
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;

export const validate = {
  /**
   * 시작부터 끝까지 (^와 $) 문자열로 매치
   * 이메일 주소의 로컬 파트는 알파벳 대소문자, 숫자, 특수문자(._-)로 구성될 수 있음
   * @ 기호가 포함되어야 함
   * 도메인 부분은 알파벳 대소문자와 숫자로 구성될 수 있으며, 마침표(.)와 하이픈(-)도 포함할 수 있음
   * 도메인 부분에는 최소 2자에서 최대 4자의 알파벳이 포함되어야 함
   */
  // 실제적인 유효성 검사를 위해서는 추가적인 절차가 필요 > 이메일 형식에 맞추어 입력된 문자열이 실제로 존재하는 도메인과 연결되었는지 확인하는 MX 레코드 조회 등의 작업
  email: {
    value: EMAIL_REGEXP,
    message: '이메일 형식이 올바르지 않습니다.',
  },
  /* 10자 이상의 영문,숫자 */
  password: {
    value: PWD_REGEX,
    message: '비밀번호는 10자 이상의 영문,숫자를 입력해주세요.',
  },
};
