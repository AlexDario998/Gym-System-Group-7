/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     28/11/2021 22:03:32                          */
/*==============================================================*/


alter table GYMMACHINE 
   drop foreign key FK_GYMMACHI_IS_DIVIDE_DEVICE;

alter table LEADERGYM 
   drop foreign key FK_LEADERGY_IS_DIVIDE_USER;

alter table LEADERGYM 
   drop foreign key FK_LEADERGY_SUPERVISE_GYM;

alter table MANTENAINCEADMIN 
   drop foreign key FK_MANTENAI_IS_DIVIDE_USER;

alter table MANTENAINCEGROUP 
   drop foreign key FK_MANTENAI_IS_DIVIDE_USER;

alter table REQUEST 
   drop foreign key FK_REQUEST_REQUEST_DEVICE;

alter table REQUEST 
   drop foreign key FK_REQUEST_REQUEST2_LEADERGY;

alter table SUPERADMIN 
   drop foreign key FK_SUPERADM_IS_DIVIDE_USER;

alter table SYSTEMADMIN 
   drop foreign key FK_SYSTEMAD_IS_DIVIDE_USER;

alter table TIDISPOSITIVE 
   drop foreign key FK_TIDISPOS_IS_DIVIDE_DEVICE;

drop table if exists DEVICE;

drop table if exists GYM;


alter table GYMMACHINE 
   drop foreign key FK_GYMMACHI_IS_DIVIDE_DEVICE;

drop table if exists GYMMACHINE;


alter table LEADERGYM 
   drop foreign key FK_LEADERGY_SUPERVISE_GYM;

alter table LEADERGYM 
   drop foreign key FK_LEADERGY_IS_DIVIDE_USER;

drop table if exists LEADERGYM;


alter table MANTENAINCEADMIN 
   drop foreign key FK_MANTENAI_IS_DIVIDE_USER;

drop table if exists MANTENAINCEADMIN;


alter table MANTENAINCEGROUP 
   drop foreign key FK_MANTENAI_IS_DIVIDE_USER;

drop table if exists MANTENAINCEGROUP;


alter table REQUEST 
   drop foreign key FK_REQUEST_REQUEST2_LEADERGY;

alter table REQUEST 
   drop foreign key FK_REQUEST_REQUEST_DEVICE;

drop table if exists REQUEST;


alter table SUPERADMIN 
   drop foreign key FK_SUPERADM_IS_DIVIDE_USER;

drop table if exists SUPERADMIN;


alter table SYSTEMADMIN 
   drop foreign key FK_SYSTEMAD_IS_DIVIDE_USER;

drop table if exists SYSTEMADMIN;


alter table TIDISPOSITIVE 
   drop foreign key FK_TIDISPOS_IS_DIVIDE_DEVICE;

drop table if exists TIDISPOSITIVE;

drop table if exists USER;

/*==============================================================*/
/* Table: DEVICE                                                */
/*==============================================================*/
create table DEVICE
(
   DEVID                int not null  comment '',
   DEVSERIALNUMBER      varchar(20) not null  comment '',
   DEVNAME              char(20) not null  comment '',
   DEVBRAND             char(20) not null  comment '',
   DEVTYPE              char(1) not null  comment '',
   primary key (DEVID)
);

alter table DEVICE comment 'Information about the devices of each gym.';

/*==============================================================*/
/* Table: GYM                                                   */
/*==============================================================*/
create table GYM
(
   GYMID                int not null  comment '',
   GYMNAME              varchar(35) not null  comment '',
   GYMCITY              varchar(30) not null  comment '',
   primary key (GYMID)
);

alter table GYM comment 'Information about the gyms of the chain.';

/*==============================================================*/
/* Table: GYMMACHINE                                            */
/*==============================================================*/
create table GYMMACHINE
(
   DEVID                int not null  comment '',
   DEVSERIALNUMBER      varchar(20) not null  comment '',
   DEVNAME              char(20) not null  comment '',
   DEVBRAND             char(20) not null  comment '',
   DEVTYPE              char(1) not null  comment '',
   GYMMACZONE           char(20) not null  comment '',
   primary key (DEVID)
);

alter table GYMMACHINE comment 'Information about the gym machines of the chain of gyms.';

/*==============================================================*/
/* Table: LEADERGYM                                             */
/*==============================================================*/
create table LEADERGYM
(
   USENUMBERID          int not null  comment '',
   USEID                char(10) not null  comment '',
   USENAME              varchar(35) not null  comment '',
   USELASTNAME          varchar(35) not null  comment '',
   USU_TELEFONO         varchar(35) not null  comment '',
   USEPASSWORD          char(20) not null  comment '',
   USETYPE              char(2) not null  comment '',
   GYMID                int not null  comment '',
   primary key (USENUMBERID)
);

alter table LEADERGYM comment 'Information about leader gym.';

/*==============================================================*/
/* Table: MANTENAINCEADMIN                                      */
/*==============================================================*/
create table MANTENAINCEADMIN
(
   USENUMBERID          int not null  comment '',
   USEID                char(10) not null  comment '',
   USENAME              varchar(35) not null  comment '',
   USELASTNAME          varchar(35) not null  comment '',
   USU_TELEFONO         varchar(35) not null  comment '',
   USEPASSWORD          char(20) not null  comment '',
   USETYPE              char(2) not null  comment '',
   primary key (USENUMBERID)
);

alter table MANTENAINCEADMIN comment 'Information about mantenaince admin.';

/*==============================================================*/
/* Table: MANTENAINCEGROUP                                      */
/*==============================================================*/
create table MANTENAINCEGROUP
(
   USENUMBERID          int not null  comment '',
   USEID                char(10) not null  comment '',
   USENAME              varchar(35) not null  comment '',
   USELASTNAME          varchar(35) not null  comment '',
   USU_TELEFONO         varchar(35) not null  comment '',
   USEPASSWORD          char(20) not null  comment '',
   USETYPE              char(2) not null  comment '',
   primary key (USENUMBERID)
);

alter table MANTENAINCEGROUP comment 'Information about mantenaince group';

/*==============================================================*/
/* Table: REQUEST                                               */
/*==============================================================*/
create table REQUEST
(
   REQID                int not null  comment '',
   USENUMBERID          int not null  comment '',
   DEVID                int not null  comment '',
   REQDATE              date not null  comment '',
   primary key (REQID)
);

alter table REQUEST comment 'Information about the requests.';

/*==============================================================*/
/* Table: SUPERADMIN                                            */
/*==============================================================*/
create table SUPERADMIN
(
   USENUMBERID          int not null  comment '',
   USEID                char(10) not null  comment '',
   USENAME              varchar(35) not null  comment '',
   USELASTNAME          varchar(35) not null  comment '',
   USU_TELEFONO         varchar(35) not null  comment '',
   USEPASSWORD          char(20) not null  comment '',
   USETYPE              char(2) not null  comment '',
   primary key (USENUMBERID)
);

alter table SUPERADMIN comment 'Information about the application super admin.';

/*==============================================================*/
/* Table: SYSTEMADMIN                                           */
/*==============================================================*/
create table SYSTEMADMIN
(
   USENUMBERID          int not null  comment '',
   USEID                char(10) not null  comment '',
   USENAME              varchar(35) not null  comment '',
   USELASTNAME          varchar(35) not null  comment '',
   USU_TELEFONO         varchar(35) not null  comment '',
   USEPASSWORD          char(20) not null  comment '',
   USETYPE              char(2) not null  comment '',
   primary key (USENUMBERID)
);

alter table SYSTEMADMIN comment 'Information about the system admin.';

/*==============================================================*/
/* Table: TIDISPOSITIVE                                         */
/*==============================================================*/
create table TIDISPOSITIVE
(
   DEVID                int not null  comment '',
   DEVSERIALNUMBER      varchar(20) not null  comment '',
   DEVNAME              char(20) not null  comment '',
   DEVBRAND             char(20) not null  comment '',
   DEVTYPE              char(1) not null  comment '',
   primary key (DEVID)
);

alter table TIDISPOSITIVE comment 'Information about the TIs dispositives.';

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   USENUMBERID          int not null  comment '',
   USEID                char(10) not null  comment '',
   USENAME              varchar(35) not null  comment '',
   USELASTNAME          varchar(35) not null  comment '',
   USU_TELEFONO         varchar(35) not null  comment '',
   USEPASSWORD          char(20) not null  comment '',
   USETYPE              char(2) not null  comment '',
   primary key (USENUMBERID)
);

alter table USER comment 'Información about the user of the application.';

alter table GYMMACHINE add constraint FK_GYMMACHI_IS_DIVIDE_DEVICE foreign key (DEVID)
      references DEVICE (DEVID) on delete restrict on update restrict;

alter table LEADERGYM add constraint FK_LEADERGY_IS_DIVIDE_USER foreign key (USENUMBERID)
      references USER (USENUMBERID) on delete restrict on update restrict;

alter table LEADERGYM add constraint FK_LEADERGY_SUPERVISE_GYM foreign key (GYMID)
      references GYM (GYMID) on delete restrict on update restrict;

alter table MANTENAINCEADMIN add constraint FK_MANTENAI_IS_DIVIDE_USER foreign key (USENUMBERID)
      references USER (USENUMBERID) on delete restrict on update restrict;

alter table MANTENAINCEGROUP add constraint FK_MANTENAI_IS_DIVIDE_USER foreign key (USENUMBERID)
      references USER (USENUMBERID) on delete restrict on update restrict;

alter table REQUEST add constraint FK_REQUEST_REQUEST_DEVICE foreign key (DEVID)
      references DEVICE (DEVID) on delete restrict on update restrict;

alter table REQUEST add constraint FK_REQUEST_REQUEST2_LEADERGY foreign key (USENUMBERID)
      references LEADERGYM (USENUMBERID) on delete restrict on update restrict;

alter table SUPERADMIN add constraint FK_SUPERADM_IS_DIVIDE_USER foreign key (USENUMBERID)
      references USER (USENUMBERID) on delete restrict on update restrict;

alter table SYSTEMADMIN add constraint FK_SYSTEMAD_IS_DIVIDE_USER foreign key (USENUMBERID)
      references USER (USENUMBERID) on delete restrict on update restrict;

alter table TIDISPOSITIVE add constraint FK_TIDISPOS_IS_DIVIDE_DEVICE foreign key (DEVID)
      references DEVICE (DEVID) on delete restrict on update restrict;

