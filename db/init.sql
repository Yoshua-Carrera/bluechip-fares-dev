SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contact_us_form; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.contact_us_form (
    id integer NOT NULL,
    customer_name character varying NOT NULL,
    customer_email character varying NOT NULL,
    customer_phone character varying NOT NULL,
    customer_request character varying NOT NULL,
    image character varying
);


ALTER TABLE public.contact_us_form OWNER TO neondb_owner;

--
-- Name: contact_us_form_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

ALTER TABLE public.contact_us_form ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contact_us_form_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: contact_us_form contact_us_form_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.contact_us_form
    ADD CONSTRAINT contact_us_form_pkey PRIMARY KEY (id);
