--GRUPO
create table grupo(
id_grupo serial primary key not null,
clave_grupo integer,
turno varchar(40),
clave_cuatrimestre varchar(40),
aula varchar(40)
);

--ALUMNO
create table alumno(
id_alumo serial primary key not null,
nombres varchar(40),
apellido_paterno varchar(40),
apellido_materno varchar(40),
matricula varchar(40)
);

alter table alumno add fk_carrera integer


--MAESTRO
create table maestro(
id_maestro serial primary key not null,
nombres varchar(40),
apellido_paterno varchar(40),
apellido_materno varchar(40),
matricula varchar(40),
contrasenia varchar(40)
);

--MATERIA
create table materia(
id_materia serial primary key not null,
nombre varchar(40),
horas integer,
faltas_permitidas integer
);

alter table materia add fk_maestro integer
alter table materia add fk_carrera integer

--PERIODO
create table periodo(
id_periodo serial primary key not null,
anio varchar(40),
periodo varchar(40)
);

--CARRERA
create table carrera(
id_carrera serial primary key not null,
nombre varchar(40),
numero_cuatrimestre integer,
matricula varchar(40)
);

--CALIFICACION
create table calificacion(
id_calificacion serial primary key not null,
bimestre_uno float,
bimestre_dos float,
ordinario float,
promedio_bimestral float,
promedio_final float,
extraordinario float,
titulo float,
insuficiencia float
);


--ASISTENCIAS
create table asistencias(
id_asistencias serial primary key not null,
numero_asistencias integer
);
alter table asistencias add fk_materia integer
alter table asistencias add fk_alumno integer

--ADMINISTRADOR
create table administrador(
id_administrador SERIAL primary key not null,
nombres varchar(40),
apellido_paterno varchar(40),
apellido_materno varchar(40),
matricula varchar(40),
contrasenia varchar(40)
);
--insert into administrador (nombres, apellido_paterno, apellido_materno, matricula, contrasenia) values('Omar', 'Cruz', 'RendÃ³n', '014400841', '123456')

--ALUMNO_MATERIA
create table alumno_materia(
id_alumno_materia serial primary key not null
);
alter table alumno_materia add fk_alumno integer
alter table alumno_materia add fk_materia integer
alter table alumno_materia add fk_grupo integer
alter table alumno_materia add fk_calificacion integer


--DOCUMENTO GENERADO
create table documento_generado(
id_documento_generado serial primary key not null
);
alter table documento_generado add fk_alumno_materia integer
alter table documento_generado add fk_periodo integer
alter table documento_generado add fk_asistencias integer

--LLAVES FORANEAS

--llaves foraneas para alumno
alter table alumno add constraint FKCarrera foreign key(fk_carrera) references carrera(id_carrera)

--llaves foraneas para materia
alter table materia add constraint FKMaestro foreign key(fk_maestro) references maestro(id_maestro)
alter table materia add constraint FKCarrera foreign key(fk_carrera) references carrera(id_carrera)

--llaves foraneas para asistencias
alter table asistencias add constraint FKMateria foreign key(fk_materia) references materia(id_materia)
alter table asistencias add constraint FKAlumno foreign key(fk_alumno) references alumno(id_alumo)

--llaves foraneas para alumno_materia
alter table alumno_materia add constraint FKAlumno foreign key(fk_alumno) references alumno(id_alumo)
alter table alumno_materia add constraint FKMateria foreign key(fk_materia) references materia(id_materia)
alter table alumno_materia add constraint FKGrupo foreign key(fk_grupo) references grupo(id_grupo)
alter table alumno_materia add constraint FKCalificacion foreign key(fk_calificacion) references calificacion(id_calificacion)

--llaves foraneas para documento_generado
alter table documento_generado add constraint FKAlumno_materia foreign key(fk_alumno_materia) references alumno_materia(id_alumno_materia)
alter table documento_generado add constraint FKPeriodo foreign key(fk_periodo) references periodo(id_periodo)
alter table documento_generado add constraint FKAsistencias foreign key(fk_asistencias) references asistencias(id_asistencias)
