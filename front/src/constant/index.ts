// description:  Navigation URL PATH
export const SNS_PATH = '/sns/:accessToken/:expires';
export const AUTH_PATH = '/authentication';
export const SERVICE_PATH = '/service';
export const LOCAL_PATH = 'local';
export const RATIO_PARH = 'ratio';
export const QNA_PATH = 'qna';
export const QNA_WRITE_PATH = 'write';
export const QNA_DETALE_PATH = ':receptionNumber';
export const QNA_UPDATE_PATH = 'update/:receptionNumber';

// description: Navigation 절대 URL PATH
export const AUTH_ABSOLUTE_PATH = AUTH_PATH;
export const LOCAL_ABSOLUTE_PATH = `${SERVICE_PATH}/${LOCAL_PATH}`;
export const RATIO_ABSOLUTE_PARH = `${SERVICE_PATH}/${RATIO_PARH}`;
export const QNA_LIST_ABSOLUTE_PATH = `${SERVICE_PATH}/${QNA_PATH}`;
export const QNA_WRITE_ABSOLUTE_PATH = `${SERVICE_PATH}/${QNA_PATH}/${QNA_WRITE_PATH}`;
export const QNA_DETALE_ABSOLUTE_PATH = (receptionNumber: number | string) => `${SERVICE_PATH}/${QNA_PATH}/${receptionNumber}`;
export const QNA_UPDATE_ABSOLUTE_PATH =(receptionNumber: string | number) => `${SERVICE_PATH}/${QNA_PATH}/update/${receptionNumber}`;

// description: API URL PATH 
export const SERVER_DOMAIN_URL = 'http://localhost:4000';
export const SEVER_API_URL = `${SERVER_DOMAIN_URL}/api/v1`;
export const SEVER_AUTH_MODULE_URL = `${SEVER_API_URL}/auth`;

export const SIGN_IN_REQUEST_URL = `${SEVER_AUTH_MODULE_URL}/sign-in`;
export const ID_CHECK_REQUEST_URL = `${SEVER_AUTH_MODULE_URL}/id-check`;
export const EMAIL_AUTH_REQUEST_URL = `${SEVER_AUTH_MODULE_URL}/email-auth`;
export const EMAIL_AUTH_CHECK_REQUEST_URL = `${SEVER_AUTH_MODULE_URL}/email-auth-check`;
export const SIGN_UP_REQUEST_URL = `${SEVER_AUTH_MODULE_URL}/sign-up`;

export const SEVER_USER_MODULE_URL = `${SEVER_API_URL}/user`;

export const GET_SIGN_IN_USER_REQUEST_URL = `${SEVER_USER_MODULE_URL}/`;

export const SEVER_BOARD_MODULE_URL = `${SEVER_API_URL}/board`;

export const POST_BOARD_REQUEST_URL = `${SEVER_BOARD_MODULE_URL}/`;
export const POST_COMMENT_REQUEST_URL = (receptionNumber: string | number) =>`${SEVER_BOARD_MODULE_URL}/${receptionNumber}/comment`;
export const GET_BOARD_LIST_URL = `${SEVER_BOARD_MODULE_URL}/list`;
export const GET_SEARCH_BOARD_LIST_URL = `${GET_BOARD_LIST_URL}/search`;
export const GET_BOARD_URL = (receptionNumber: string|number) =>`${SEVER_BOARD_MODULE_URL}/${receptionNumber}`;
export const PUT_BOARD_URL = (receptionNumber: number | string) => `${SEVER_BOARD_MODULE_URL}/${receptionNumber}`;
export const INCREASE_VIEW_COUNT_URL = (receptionNumber: string|number) =>`${SEVER_BOARD_MODULE_URL}/${receptionNumber}/increase-view-count`;
export const DELETE_BOARD_URL = (receptionNumber: number | string ) => `${SEVER_BOARD_MODULE_URL}/${receptionNumber}`;
export const SEVER_ESTATE_MODULE_URL = `${SEVER_API_URL}/estate`;
export const GET_LOCAL_DATA_URL = (local: String) => `${SEVER_ESTATE_MODULE_URL}/local/${local}`;
export const GET_RATIO_DATA_URL = (local: String) => `${SEVER_ESTATE_MODULE_URL}/ratio/${local}`;

// description : 게시물 상수 
export const COUNT_PER_PAGE = 10;
export const COUNT_PER_SECTION = 10;