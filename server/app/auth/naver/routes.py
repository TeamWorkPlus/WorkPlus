from app.configs import Configs

from app.auth.libs import fastapi_users
from app.auth.naver.client import NaverOAuth2
from app.auth.naver.backend import auth_backend

naver_oauth_client = NaverOAuth2(
    client_id=Configs.NAVER_CLIENT_ID,
    client_secret=Configs.NAVER_CLIENT_SECRET
)

naver_oauth_router = fastapi_users.get_oauth_router(
    oauth_client=naver_oauth_client,
    backend=auth_backend,
    state_secret=Configs.SECRET_KEY,
    redirect_url=Configs.NAVER_CALLBACK_URL,
    associate_by_email=True,
)
