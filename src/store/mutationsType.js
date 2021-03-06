/**
 * @description store의 각 module별 mutation type 관리
 */

const commonMutationType = {
    SET_BOARD_LIST: 'SET_BOARD_LIST', // 게시글 리스트
    SET_NOTICE_LIST: 'SET_NOTICE_LIST', // 공지사항 리스트
    SET_BOARD_DETAIL: 'SET_BOARD_DETAIL', // 게시글 상세
    SET_BOARD_COMMENT: 'SET_BOARD_COMMENT', // 게시글 댓글
    SET_BOARD_ADD: 'SET_BOARD_ADD', // 게시글 등록
    SET_BOARD_UPDATE: 'SET_BOARD_UPDATE', // 게시글 수정
    SET_BOARD_DELETE: 'SET_BOARD_DELETE', // 게시글 삭제
    SET_COMMENT_ADD: 'SET_COMMENT_ADD', // 댓글 등록
    SET_COMMENT_UPDATE: 'SET_COMMENT_UPDATE', // 댓글 수정
    SET_COMMENT_DELETE: 'SET_COMMENT_DELETE', // 댓글 삭제
    GET_ID_CHECK: 'GET_ID_CHECK', // 아이디 중복체크
    SET_ADD_USER: 'SET_ADD_USER', // 회원가입
    SET_USER_LIST: 'SET_USER_LIST', // 사용자 목록 조회
    SET_USER_DETAIL: 'SET_USER_DETAIL', // 사용자 상세 조회
    SET_USER_UPDATE: 'SET_USER_UPDATE', // 사용자 정보 수정
    SET_USER_DELETE: 'SET_USER_DELETE', // 사용자 정보 삭제
    SET_UPDATE_PERMISSION: 'SET_UPDATE_PERMISSION', // 회원가입 승인
    SET_LOGIN: 'SET_LOGIN', // 로그인 정보
    SET_IS_LOGIN: 'SET_IS_LOGIN', // 로그인 여부
};

export default commonMutationType;