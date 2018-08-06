#!/bin/bash

cd /var/www

PROJECT="medx-admin"
DEPLOY_FILE_NAME="deploy.stage.tar.gz"
DEPLOY_LOGIN="alexey.kosinski@nordwhale.com"
PROJECT_FOLDER="/var/www/medx-admin"

DEPLOY_FILE_PATH="/var/www/${DEPLOY_FILE_NAME}"

dt=`date '+%d-%m-%Y_%H-%M-%S'`
BACKUP_FOLDER="${PROJECT_FOLDER}_bkp_${dt}"

sudo mkdir -p "${BACKUP_FOLDER}"
sudo cp -R "${PROJECT_FOLDER}/" "${BACKUP_FOLDER}"

sudo rm -rf "${PROJECT_FOLDER}"
sudo rm -f "${DEPLOY_FILE_PATH}"

read -p "Enter filename to download from bitbucket, default [${DEPLOY_FILE_NAME}] " NEWFILE
[ -n "${NEWFILE}" ] && DEPLOY_FILE_NAME=$NEWFILE

read -p "Enter bitbucket login default [${DEPLOY_LOGIN}]" USER
[ -n "${USER}" ] && DEPLOY_LOGIN=USER
URL="https://bitbucket.org/nordwhaleteam/${PROJECT}/downloads/${DEPLOY_FILE_NAME}"
sudo curl -L -su "${DEPLOY_LOGIN}" "${URL}" -o "${DEPLOY_FILE_NAME}"

sudo mkdir deploy
sudo tar -xf "./${DEPLOY_FILE_NAME}" -C ./deploy
sudo mv ./deploy/build "${PROJECT_FOLDER}"

curl -X POST --data-urlencode "payload={\"channel\": \"#medx\", \"text\": \"${USER} deployed ${DEPLOY_FILE_NAME}. Please check <http://admin.medx.nordwhale.com/>\"}"  https://hooks.slack.com/services/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

sudo rm -rf deploy