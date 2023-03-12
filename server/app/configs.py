import os
from functools import lru_cache
from typing import Final
from dotenv import load_dotenv
import os
load_dotenv()
# print(os.getenv('DEBUG'))

from pydantic import BaseSettings, Field


def get_env_file():
    stage = os.environ.get('ENV') or 'dev'
    return f'{stage}.env'


class Settings(BaseSettings):
    DEBUG: Final = False

    HTTPS: Final = False
    HOST: Final = "localhost"

    SECRET_KEY: Final = os.getenv('SECRET_KEY')
    ALGORITHM: Final = os.getenv('ALGORITHM')
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    DB_DATABASE: Final = os.getenv('DB_DATABASE')
    DB_URL: Final = os.getenv('DB_URL')

    ORIGINS: Final = os.getenv('ORIGINS')
    ALLOWED_HOSTS: Final = os.getenv('ALLOWED_HOSTS')

    GOOGLE_CLIENT_ID: str = os.getenv('GOOGLE_CLIENT_ID')
    GOOGLE_CLIENT_SECRET: str = os.getenv('GOOGLE_CLIENT_SECRET')
    GOOGLE_CALLBACK_URL: str = os.getenv('GOOGLE_CALLBACK_URL')

    # GITHUB_CLIENT_ID: str = None
    # GITHUB_CLIENT_SECRET: str = None
    # GITHUB_CALLBACK_URL: str = None

    KAKAO_CLIENT_ID: str = None
    KAKAO_CLIENT_SECRET: str = None
    KAKAO_CALLBACK_URL: str = None

    NAVER_CLIENT_ID: str = None
    NAVER_CLIENT_SECRET: str = None
    NAVER_CALLBACK_URL: str = None

    class Config:
        env_file = get_env_file()

    @property
    def URL(self) -> str:
        protocol = 'https' if self.HTTPS else 'http'
        return f'{protocol}://{self.HOST}'


Configs = Settings()

@lru_cache()
def get_settings():
    return 