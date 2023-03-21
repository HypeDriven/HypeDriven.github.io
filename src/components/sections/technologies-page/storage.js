const technologyItems = [
    {
        id: 1,
        title: "Frontend",
        showContent: false,
        img: require('@/assets/img/images/technologiespage-technologies-img1.png'),
        imgType: 1,
        technologiesDescribe: [
            {
                title: "React",
                subtittle: "React, React Redux, React Admin, React-Draggable, Immutable, Reselect, Redux, Redux-Thunk, Redux-Saga, Redux-Persist, Redux-Intl, Redux-Form, Formik, RxJS, Nx, React-i18n, React-Native, React-Navigation, React-Router-DOM, Three.JS, Styled-Components, NextJS",
                icon: require('@/assets/img/images/technologiespage-frontend-icon1.svg')
            },
            {
                title: "Angular",
                subtittle: "Angular, Angular material, KendoUI, Ant Design, PrimeNG, Bootstrap, DevExtreme, Nebular, Ag Grid; NgRx, NGXS, MobX, Akita; D3.js, ngx-translate, Formly, Nx, cytoscape.js, Ionic, Angular CDK, Chart.js",
                icon: require('@/assets/img/images/technologiespage-frontend-icon2.svg')
            },
            {
                title: "Vue.js",
                subtittle: "Vue, Vuex, Vue Router, Vue Test Utils, NuxtJS, Framework7, Vue Loader, Vite, Vue CLI, Vue Meta, Vue I18n, Vuelidate, vue-chartjs, Vuetify, Element UI, Quasar Framework, Bootstrap Vue, Rollbar, Auth0",
                icon: require('@/assets/img/images/technologiespage-frontend-icon3.svg')
            },
            {
                title: "JavaScript",
                subtittle: "Material, Ant Design, Apollo GraphQL, Protractor, Jasmine, Jest, Enzyme, Mocha, Electron, SSR, Lodash, Date-FNS, CSS, SASS/SCSS, LESS, Lerna, TypeScript",
                icon: require('@/assets/img/images/technologiespage-frontend-icon4.svg')
            },
        ]
    },
    {
        id: 2,
        title: "Backend",
        img: require('@/assets/img/images/technologiespage-technologies-img2.png'),
        imgType: 2,
        showContent: false,
        technologiesDescribe: [
            {
                title: "Java",
                subtittle: "Java SE/EE, Kotlin, Scala, Groovy, RxJava, Spring Framework (Core, Data, Boot, Batch, Cloud, Security, Retry, MVC, AOP, Reactor), MapStruct, Lombok, Feign, WebFlux, Vert.x, jOOQ, Hibernate, JPA2, QueryDSL, Kafka, RabbitMQ, ActiveMQ, IBM MQ, Apache Spark, Apache NiFi, Apache Camel, Flyway, Liquibase, Keycloak, Microservices Architecture, ELK, Prometheus, Grafana, Splunk, AppDynamics, Docker, Kubernetes, OpenShift, REST, WebSockets, RSocket, SOAP, GraphQL, GWT, DB (Oracle, PostgreSQL, MySQL, MongoDB, Cassandra), Lucene, Solr, ElasticSearch, Redis, Ehcache, Hazelcast, Caffeine, Camunda, Activiti, Zeebe, jBPM, Flowable, JUnit, TestNG, Mockito, Cucumber",
                icon: require('@/assets/img/images/technologiespage-backend-icon1.svg'),
            },
            {
                title: ".NET",
                subtittle: ".NET Core, ASP.NET Core MVC, ASP.NET Web API, ASP.NET MVC, ASP.NET Web forms",
                icon: require('@/assets/img/images/technologiespage-backend-icon2.svg'),
            },
            {
                title: "Python",
                subtittle: "Django, Django Rest Framework, Flask, FastAPI, AsyncIo, AioHttp, Tornado, Celery, Microservices Architecture, Docker/Kubernetes, PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, REST API, GraphQL, Web Socket, Swagger, JWT, OAuth",
                icon: require('@/assets/img/images/technologiespage-backend-icon3.svg'),
            },
            {
                title: "PHP",
                subtittle: "PHP, AMP V3, ReactPHP, DUKPT, Laravel, Symfony, Yii2, Laminas, Magento, PrestaShop, OpenCart, WordPress, Drupal, Joomla, PHP::FFI, PHP::JIT, MySQL, MSSQL, MongoDB, PostgreSQL, REST/SOAP/GraphQL API, JWT, OAuth, HTML, Twig, CSS, SASS/SCSS, LESS, Web Socket, Swagger, Redis, ElasticSearch, Docker, Vagrant ,AWS SQS, Payment systems integrations (Stripe, Coinbase, Circle, PayPal, Authorize.net), social integrations (Facebook, Google), Firebase CM, WebRTC, Video Streaming",
                icon: require('@/assets/img/images/technologiespage-backend-icon4.svg'),
            },
            {
                title: "Unity",
                subtittle: "Unity, Godot, Blender, Krita, Amplify Shader Editor, MapBox SDK, Unity IAP; Firebase SDK; ARCore, AR Foundation, ARKit, Vuforia; Google VR SDK, Steam VR SDK; Unity XR Platform SDK",
                icon: require('@/assets/img/images/technologiespage-backend-icon5.svg'),
            },
            {
                title: "NodeJS",
                subtittle: "NestJS, Koa, Express, RxJS, MongoDB, PostgreSQL, MySQL, GraphQL, Mongoose, TypeORM, Sequelize, Passport, Knex, AWS (Lamda, EC2, RDS)",
                icon: require('@/assets/img/images/technologiespage-backend-icon6.svg'),
            },
            {
                title: "Go",
                subtittle: "Go, gORM,Gin, protobuf, gRPC, AWS, GCP, Docker, Redis, Mongo DB, PostgreSQL",
                icon: require('@/assets/img/images/technologiespage-backend-icon7.svg'),
            },
            {
                title: "Ruby",
                subtittle: "Ruby on Rails, Sinatra, Hanami, Padrino, Volt, EventMachine, Rack, Sidekiq, GraphQL, Web Socket, Swagger, JWT, OAuth",
                icon: require('@/assets/img/images/technologiespage-backend-icon8.svg'),
            }
        ]
        
    },
    {
        id: 3,
        title: "Mobile",
        showContent: false,
        imgType: 1,
        img: require('@/assets/img/images/technologiespage-technologies-img3.png'),
        technologiesDescribe: [
            {
                title: "Android",
                subtittle: "Java, Kotlin, MVP, MVVM, Clean Architecture, Multi-module architecture AAC (ViewModel, LiveData, Lifecycle, Navigation Component, Paging), Dagger2 + Hilt, Toothpick, Moxy, Cicerone, RxJava 2, Coroutines, Retrofit, kotlinx Serialization, ViewBinding, DataBinding, JUnit, Mockito, MockK, Robolectric, detekt, ktlint",
                icon: require('@/assets/img/images/technologiespage-mobile-icon1.svg'),
            },
            {
                title: "iOS",
                subtittle: "Objective-C, Swift, MVP, MVVM, Clean Swift SnapKit, XIB, SwiftUI, GCD, RxSwift, Combine, Swinject, Alamofire, URLSession, AVFoundation, MapKit + CoreLocation, WatchKit, WatchConnectivity, XCTest, SwiftLint",
                icon: require('@/assets/img/images/technologiespage-mobile-icon2.svg'),
            },
            {
                title: "React Native",
                subtittle: "JavaScript, React, React Native, React Navigation, Redux, Redux-Saga, Redux-Persist, Redux-Offline, Redux-Thunk, RxJS, TypeScript, Apollo GraphQL, StyleSheet, React-Form-Hook, Firebase, Hasura, i18n, Styled-Components",
                icon: require('@/assets/img/images/technologiespage-mobile-icon3.svg'),
            },
            {
                title: "Flutter",
                subtittle: "Dart, Bloc, Clean Architecture, Multi-Package architecture Flutter, Flutter Web, Dart async, RxDart, Dart Streams, Navigator 2.0, GetIt, Dio, GraphQL, linter (effective dart style), Mocktail, Bloc Test",
                icon: require('@/assets/img/images/technologiespage-mobile-icon4.svg'),
            },
            {
                title: "Xamarin",
                subtittle: "JC#, Xamarin.Native (Xamarin.iOS, Xamarin.Android, Xamarin.Mac), Xamarin.Forms, Visual Studio, Electron",
                icon: require('@/assets/img/images/technologiespage-mobile-icon5.svg'),
            },
            {
                title: "Architecture",
                subtittle: "Kafka (Core, Streams, Connect, Schema Registry), RabbitMQ, ZeroMQ, Nats, ActiveMQ, IBM MQ, Azure Service Bus, Azure Event Hub, IoT Hub",
                icon: require('@/assets/img/images/technologiespage-mobile-icon6.svg'),
            },
            {
                title: "Cloud",
                subtittle: "Amazon Web Services (AWS) Amazon Elastic Compute Cloud (EC2), Amazon Simple Storage Service (S3), Amazon Elastic Container Service (Amazon ECS), DynamoDB, Relational Database Service (RDS), AWS Lambda, ElastiCache, CloudSearch",
                icon: require('@/assets/img/images/technologiespage-mobile-icon7.svg'),
            },
            {
                title: "Microsoft Azure",
                subtittle: "Azure Virtual Machines, Azure Web Apps, Azure Functions, Azure Blob Storage, Azure Notification Hub, Azure AI, Azure IoT Hub, Azure Event Hub, Azure Tables, Azure Queue, Azure DevOps Pipelines, Azure Content Delivery Network, Azure Application Insights, Azure Kubernetes, Azure SQL",
                icon: require('@/assets/img/images/technologiespage-mobile-icon8.svg'),
            },
            {
                title: "Google Cloud Platform (GCP)",
                subtittle: "Azure Virtual Machines, Azure Web Apps, Azure Functions, Azure Blob Storage, Azure Notification Hub, Azure AI, Azure IoT Hub, Azure Event Hub, Azure Tables, Azure Queue, Azure DevOps Pipelines, Azure Content Delivery Network, Azure Application Insights, Azure Kubernetes, Azure SQL",
                icon: require('@/assets/img/images/technologiespage-mobile-icon9.svg'),
            }
        ]
    },
    {
        id: 4,
        title: "Design",
        showContent: false,
        imgType: 3,
        img: require('@/assets/img/images/technologiespage-technologies-img4.png'),
        technologiesDescribe: [
            {
                title: "UI",
                subtittle: "Sketch, Figma, Adobe XD, InVision Studio, Proto.io, Marvel, Zeplin, Flowmapp, Balsamic, Hotjar, Adobe Collection",
                icon: require('@/assets/img/images/technologiespage-design-icon1.svg'),
            },
            {
                title: "UX",
                subtittle: "User interviews, focus groups, user story maps, MVT and A/B testing, UI review, usability testing, eye tracking, Google Analytics, Yandex.Metrica",
                icon: require('@/assets/img/images/technologiespage-design-icon2.svg'),
            },
            {
                title: "3D",
                subtittle: "3D Studio Max, Corona Render, 3D Coat, Adobe Photoshop, Adobe After Effect, Unity, Amplify, Shader, ZBrush, Substance Painter, ShaderMap",
                icon: require('@/assets/img/images/technologiespage-design-icon3.svg'),
            }
        ]
    },
    {
        id: 5,
        title: "QA",
        showContent: false,
        imgType: 1,
        img: require('@/assets/img/images/technologiespage-technologies-img5.png'),
        technologiesDescribe: [
            {
                title: "Manual testing",
                subtittle: "SoapUI, Postman, Altair GraphQL Client, Swagger, Charles Proxy, Fiddler, Android Studio, Genymotion",
                icon: require('@/assets/img/images/technologiespage-qa-icon1.svg'),
            },
            {
                title: "Automation testing",
                subtittle: "Selenium, Selenide, Appium, RestAssured, Allure, JMeter, Postman, SoapUI, Docker, Selenoid, Selenium Grid",
                icon: require('@/assets/img/images/technologiespage-qa-icon2.svg'),
            }
        ]
    },
    {
        id: 6,
        title: "DevOps",
        showContent: false,
        imgType: 3,
        img: require('@/assets/img/images/technologiespage-technologies-img6.png'),
        technologiesDescribe: [
            {
                title: "-",
                subtittle: "AWS, Azure, GCP, Digital Ocean, Kubernetes, Terraform, CloudFormation, Ansible, Docker, Docker Сompose, Bash, CI/CD, Linux administration, High Availability, HiLoad, Zabbix, Prometheus, Data Dog, ELK, Grafana CI/CD",
                icon: require('@/assets/img/images/technologiespage-devops-icon1.svg'),
            },
            {
                title: "-",
                subtittle: "Git, Ansible, CloudFormation, Jenkins, Bamboo, GitLab, GitHub, Bitbucket CI/CD, Helm, Terraform, Terragrunt, Kubernetes Operators, IntelliJ IDEA Databases and cache management tools",
                icon: require('@/assets/img/images/technologiespage-devops-icon2.svg'),
            },
            {
                title: "-",
                subtittle: "PostgreSQL, Oracle, MySQL, MS SQL, MongoDB, CosmosDB, Cassandra, RavenDB, DynamoDB, MariaDB, SQLite, Azure SQL Server, AWS RDS, Redis, Hazelcast, ClickHouse",
                icon: require('@/assets/img/images/technologiespage-devops-icon3.svg'),
            },
            {
                title: "-",
                subtittle: "Management, planning and reporting tools, Management, planning and reporting tools, ",
                icon: require('@/assets/img/images/technologiespage-devops-icon4.svg'),
            },
            {
                title: "-",
                subtittle: "Jira, Trello, Microsoft Teams, Slack, MS Project, VersionOne, Mantis, Trac, Redmine, Zoom, Replicon",
                icon: require('@/assets/img/images/technologiespage-devops-icon5.svg'),
            }
        ]
    },
    {
        id: 7,
        title: "Data management",
        showContent: false,
        imgType: 1,
        img: require('@/assets/img/images/technologiespage-technologies-img7.png'),
        technologiesDescribe: [
            {
                title: "RDBMS",
                subtittle: "MySQL, PostgreSQL, Oracle, Amazon RDS, Amazon Aurora, Azure SQL Database, H2",
                icon: require('@/assets/img/images/technologiespage-data-management-icon1.svg'),
            },
            {
                title: "NoSQL",
                subtittle: "MongoDB, Apache CouchDB, Apache Cassandra, Elasticsearch, Amazon DynamoDB, Azure DocumentDB, Azure Table storage, Azure Blob storage, Firebase, Neo4j, HBase",
                icon: require('@/assets/img/images/technologiespage-data-management-icon2.svg'),
            },
            {
                title: "Caching",
                subtittle: "Memcached, Hazelcast, Redis, Amazon ElastiCache, Azure Redis Cache, EVCache, Dynomite",
                icon: require('@/assets/img/images/technologiespage-data-management-icon3.svg'),
            },
            {
                title: "Searching",
                subtittle: "Apache Lucene, Elasticsearch, Amazon CloudSearch, Azure Search, Solr",
                icon: require('@/assets/img/images/technologiespage-data-management-icon4.svg'),
            },
        ]
    }
]
    
export default technologyItems;