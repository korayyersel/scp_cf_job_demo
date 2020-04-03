1- Build: npm run build:mta
2- Deploy: cf deploy .\mta_archives\cloudfoundry_job_demo_0.0.1.mtar
3- cf update-service cloudfoundry_job_demo_jobscheduler -c '{\"enable-xsuaa-support\": true }'
4- Delete job-scheduler binding, rebind
5- cf restage cloudfoundry_job_demo_srv
6- Check sensitive data