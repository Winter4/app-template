# ---

include .env

ifeq (${ENV_MODE},dev)
    include dev.mk
else
    include prod.mk
endif