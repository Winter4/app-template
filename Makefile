# ---

include .env

ifeq (${NODE_ENV},development)
    include dev.mk
else
    include prod.mk
endif