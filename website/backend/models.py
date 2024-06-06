from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from database import Base
from database import engine
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    full_name = Column(String(255))
    username = Column(String(255), unique=True, index=True)


# Create the database tables if they don't exist
User.metadata.create_all(bind=engine)


class Conversations(Base):
    __tablename__ = "conversations"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    timestamp = Column(DateTime)
    question = Column(String(255))
    answers = relationship("Answer", back_populates="conversation")


Conversations.metadata.create_all(bind=engine)


class Answer(Base):
    __tablename__ = "answers"

    id = Column(Integer, primary_key=True, index=True)
    conversation_id = Column(Integer, ForeignKey("conversations.id"))
    answer = Column(String(255))
    timestamp = Column(DateTime)
    conversation = relationship("Conversations", back_populates="answers")


Answer.metadata.create_all(bind=engine)
