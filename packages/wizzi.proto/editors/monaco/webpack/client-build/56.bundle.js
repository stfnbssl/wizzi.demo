(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js ***!
  \********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '--',\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.sql',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    keywords: [\r\n        'AES128',\r\n        'AES256',\r\n        'ALL',\r\n        'ALLOWOVERWRITE',\r\n        'ANALYSE',\r\n        'ANALYZE',\r\n        'AND',\r\n        'ANY',\r\n        'ARRAY',\r\n        'AS',\r\n        'ASC',\r\n        'AUTHORIZATION',\r\n        'BACKUP',\r\n        'BETWEEN',\r\n        'BINARY',\r\n        'BLANKSASNULL',\r\n        'BOTH',\r\n        'BY',\r\n        'BYTEDICT',\r\n        'BZIP2',\r\n        'CASE',\r\n        'CAST',\r\n        'CHECK',\r\n        'COLLATE',\r\n        'COLUMN',\r\n        'CONSTRAINT',\r\n        'CREATE',\r\n        'CREDENTIALS',\r\n        'CROSS',\r\n        'CURRENT_DATE',\r\n        'CURRENT_TIME',\r\n        'CURRENT_TIMESTAMP',\r\n        'CURRENT_USER',\r\n        'CURRENT_USER_ID',\r\n        'DEFAULT',\r\n        'DEFERRABLE',\r\n        'DEFLATE',\r\n        'DEFRAG',\r\n        'DELTA',\r\n        'DELTA32K',\r\n        'DESC',\r\n        'DISABLE',\r\n        'DISTINCT',\r\n        'DO',\r\n        'ELSE',\r\n        'EMPTYASNULL',\r\n        'ENABLE',\r\n        'ENCODE',\r\n        'ENCRYPT',\r\n        'ENCRYPTION',\r\n        'END',\r\n        'EXCEPT',\r\n        'EXPLICIT',\r\n        'FALSE',\r\n        'FOR',\r\n        'FOREIGN',\r\n        'FREEZE',\r\n        'FROM',\r\n        'FULL',\r\n        'GLOBALDICT256',\r\n        'GLOBALDICT64K',\r\n        'GRANT',\r\n        'GROUP',\r\n        'GZIP',\r\n        'HAVING',\r\n        'IDENTITY',\r\n        'IGNORE',\r\n        'ILIKE',\r\n        'IN',\r\n        'INITIALLY',\r\n        'INNER',\r\n        'INTERSECT',\r\n        'INTO',\r\n        'IS',\r\n        'ISNULL',\r\n        'JOIN',\r\n        'LEADING',\r\n        'LEFT',\r\n        'LIKE',\r\n        'LIMIT',\r\n        'LOCALTIME',\r\n        'LOCALTIMESTAMP',\r\n        'LUN',\r\n        'LUNS',\r\n        'LZO',\r\n        'LZOP',\r\n        'MINUS',\r\n        'MOSTLY13',\r\n        'MOSTLY32',\r\n        'MOSTLY8',\r\n        'NATURAL',\r\n        'NEW',\r\n        'NOT',\r\n        'NOTNULL',\r\n        'NULL',\r\n        'NULLS',\r\n        'OFF',\r\n        'OFFLINE',\r\n        'OFFSET',\r\n        'OID',\r\n        'OLD',\r\n        'ON',\r\n        'ONLY',\r\n        'OPEN',\r\n        'OR',\r\n        'ORDER',\r\n        'OUTER',\r\n        'OVERLAPS',\r\n        'PARALLEL',\r\n        'PARTITION',\r\n        'PERCENT',\r\n        'PERMISSIONS',\r\n        'PLACING',\r\n        'PRIMARY',\r\n        'RAW',\r\n        'READRATIO',\r\n        'RECOVER',\r\n        'REFERENCES',\r\n        'RESPECT',\r\n        'REJECTLOG',\r\n        'RESORT',\r\n        'RESTORE',\r\n        'RIGHT',\r\n        'SELECT',\r\n        'SESSION_USER',\r\n        'SIMILAR',\r\n        'SNAPSHOT',\r\n        'SOME',\r\n        'SYSDATE',\r\n        'SYSTEM',\r\n        'TABLE',\r\n        'TAG',\r\n        'TDES',\r\n        'TEXT255',\r\n        'TEXT32K',\r\n        'THEN',\r\n        'TIMESTAMP',\r\n        'TO',\r\n        'TOP',\r\n        'TRAILING',\r\n        'TRUE',\r\n        'TRUNCATECOLUMNS',\r\n        'UNION',\r\n        'UNIQUE',\r\n        'USER',\r\n        'USING',\r\n        'VERBOSE',\r\n        'WALLET',\r\n        'WHEN',\r\n        'WHERE',\r\n        'WITH',\r\n        'WITHOUT'\r\n    ],\r\n    operators: [\r\n        'AND',\r\n        'BETWEEN',\r\n        'IN',\r\n        'LIKE',\r\n        'NOT',\r\n        'OR',\r\n        'IS',\r\n        'NULL',\r\n        'INTERSECT',\r\n        'UNION',\r\n        'INNER',\r\n        'JOIN',\r\n        'LEFT',\r\n        'OUTER',\r\n        'RIGHT'\r\n    ],\r\n    builtinFunctions: [\r\n        'current_schema',\r\n        'current_schemas',\r\n        'has_database_privilege',\r\n        'has_schema_privilege',\r\n        'has_table_privilege',\r\n        'age',\r\n        'current_time',\r\n        'current_timestamp',\r\n        'localtime',\r\n        'isfinite',\r\n        'now',\r\n        'ascii',\r\n        'get_bit',\r\n        'get_byte',\r\n        'set_bit',\r\n        'set_byte',\r\n        'to_ascii',\r\n        'approximate percentile_disc',\r\n        'avg',\r\n        'count',\r\n        'listagg',\r\n        'max',\r\n        'median',\r\n        'min',\r\n        'percentile_cont',\r\n        'stddev_samp',\r\n        'stddev_pop',\r\n        'sum',\r\n        'var_samp',\r\n        'var_pop',\r\n        'bit_and',\r\n        'bit_or',\r\n        'bool_and',\r\n        'bool_or',\r\n        'cume_dist',\r\n        'first_value',\r\n        'lag',\r\n        'last_value',\r\n        'lead',\r\n        'nth_value',\r\n        'ratio_to_report',\r\n        'dense_rank',\r\n        'ntile',\r\n        'percent_rank',\r\n        'rank',\r\n        'row_number',\r\n        'case',\r\n        'coalesce',\r\n        'decode',\r\n        'greatest',\r\n        'least',\r\n        'nvl',\r\n        'nvl2',\r\n        'nullif',\r\n        'add_months',\r\n        'at time zone',\r\n        'convert_timezone',\r\n        'current_date',\r\n        'date_cmp',\r\n        'date_cmp_timestamp',\r\n        'date_cmp_timestamptz',\r\n        'date_part_year',\r\n        'dateadd',\r\n        'datediff',\r\n        'date_part',\r\n        'date_trunc',\r\n        'extract',\r\n        'getdate',\r\n        'interval_cmp',\r\n        'last_day',\r\n        'months_between',\r\n        'next_day',\r\n        'sysdate',\r\n        'timeofday',\r\n        'timestamp_cmp',\r\n        'timestamp_cmp_date',\r\n        'timestamp_cmp_timestamptz',\r\n        'timestamptz_cmp',\r\n        'timestamptz_cmp_date',\r\n        'timestamptz_cmp_timestamp',\r\n        'timezone',\r\n        'to_timestamp',\r\n        'trunc',\r\n        'abs',\r\n        'acos',\r\n        'asin',\r\n        'atan',\r\n        'atan2',\r\n        'cbrt',\r\n        'ceil',\r\n        'ceiling',\r\n        'checksum',\r\n        'cos',\r\n        'cot',\r\n        'degrees',\r\n        'dexp',\r\n        'dlog1',\r\n        'dlog10',\r\n        'exp',\r\n        'floor',\r\n        'ln',\r\n        'log',\r\n        'mod',\r\n        'pi',\r\n        'power',\r\n        'radians',\r\n        'random',\r\n        'round',\r\n        'sin',\r\n        'sign',\r\n        'sqrt',\r\n        'tan',\r\n        'to_hex',\r\n        'bpcharcmp',\r\n        'btrim',\r\n        'bttext_pattern_cmp',\r\n        'char_length',\r\n        'character_length',\r\n        'charindex',\r\n        'chr',\r\n        'concat',\r\n        'crc32',\r\n        'func_sha1',\r\n        'initcap',\r\n        'left and rights',\r\n        'len',\r\n        'length',\r\n        'lower',\r\n        'lpad and rpads',\r\n        'ltrim',\r\n        'md5',\r\n        'octet_length',\r\n        'position',\r\n        'quote_ident',\r\n        'quote_literal',\r\n        'regexp_count',\r\n        'regexp_instr',\r\n        'regexp_replace',\r\n        'regexp_substr',\r\n        'repeat',\r\n        'replace',\r\n        'replicate',\r\n        'reverse',\r\n        'rtrim',\r\n        'split_part',\r\n        'strpos',\r\n        'strtol',\r\n        'substring',\r\n        'textlen',\r\n        'translate',\r\n        'trim',\r\n        'upper',\r\n        'cast',\r\n        'convert',\r\n        'to_char',\r\n        'to_date',\r\n        'to_number',\r\n        'json_array_length',\r\n        'json_extract_array_element_text',\r\n        'json_extract_path_text',\r\n        'current_setting',\r\n        'pg_cancel_backend',\r\n        'pg_terminate_backend',\r\n        'set_config',\r\n        'current_database',\r\n        'current_user',\r\n        'current_user_id',\r\n        'pg_backend_pid',\r\n        'pg_last_copy_count',\r\n        'pg_last_copy_id',\r\n        'pg_last_query_id',\r\n        'pg_last_unload_count',\r\n        'session_user',\r\n        'slice_num',\r\n        'user',\r\n        'version',\r\n        'abbrev',\r\n        'acosd',\r\n        'any',\r\n        'area',\r\n        'array_agg',\r\n        'array_append',\r\n        'array_cat',\r\n        'array_dims',\r\n        'array_fill',\r\n        'array_length',\r\n        'array_lower',\r\n        'array_ndims',\r\n        'array_position',\r\n        'array_positions',\r\n        'array_prepend',\r\n        'array_remove',\r\n        'array_replace',\r\n        'array_to_json',\r\n        'array_to_string',\r\n        'array_to_tsvector',\r\n        'array_upper',\r\n        'asind',\r\n        'atan2d',\r\n        'atand',\r\n        'bit',\r\n        'bit_length',\r\n        'bound_box',\r\n        'box',\r\n        'brin_summarize_new_values',\r\n        'broadcast',\r\n        'cardinality',\r\n        'center',\r\n        'circle',\r\n        'clock_timestamp',\r\n        'col_description',\r\n        'concat_ws',\r\n        'convert_from',\r\n        'convert_to',\r\n        'corr',\r\n        'cosd',\r\n        'cotd',\r\n        'covar_pop',\r\n        'covar_samp',\r\n        'current_catalog',\r\n        'current_query',\r\n        'current_role',\r\n        'currval',\r\n        'cursor_to_xml',\r\n        'diameter',\r\n        'div',\r\n        'encode',\r\n        'enum_first',\r\n        'enum_last',\r\n        'enum_range',\r\n        'every',\r\n        'family',\r\n        'format',\r\n        'format_type',\r\n        'generate_series',\r\n        'generate_subscripts',\r\n        'get_current_ts_config',\r\n        'gin_clean_pending_list',\r\n        'grouping',\r\n        'has_any_column_privilege',\r\n        'has_column_privilege',\r\n        'has_foreign_data_wrapper_privilege',\r\n        'has_function_privilege',\r\n        'has_language_privilege',\r\n        'has_sequence_privilege',\r\n        'has_server_privilege',\r\n        'has_tablespace_privilege',\r\n        'has_type_privilege',\r\n        'height',\r\n        'host',\r\n        'hostmask',\r\n        'inet_client_addr',\r\n        'inet_client_port',\r\n        'inet_merge',\r\n        'inet_same_family',\r\n        'inet_server_addr',\r\n        'inet_server_port',\r\n        'isclosed',\r\n        'isempty',\r\n        'isopen',\r\n        'json_agg',\r\n        'json_object',\r\n        'json_object_agg',\r\n        'json_populate_record',\r\n        'json_populate_recordset',\r\n        'json_to_record',\r\n        'json_to_recordset',\r\n        'jsonb_agg',\r\n        'jsonb_object_agg',\r\n        'justify_days',\r\n        'justify_hours',\r\n        'justify_interval',\r\n        'lastval',\r\n        'left',\r\n        'line',\r\n        'localtimestamp',\r\n        'lower_inc',\r\n        'lower_inf',\r\n        'lpad',\r\n        'lseg',\r\n        'make_date',\r\n        'make_interval',\r\n        'make_time',\r\n        'make_timestamp',\r\n        'make_timestamptz',\r\n        'masklen',\r\n        'mode',\r\n        'netmask',\r\n        'network',\r\n        'nextval',\r\n        'npoints',\r\n        'num_nonnulls',\r\n        'num_nulls',\r\n        'numnode',\r\n        'obj_description',\r\n        'overlay',\r\n        'parse_ident',\r\n        'path',\r\n        'pclose',\r\n        'percentile_disc',\r\n        'pg_advisory_lock',\r\n        'pg_advisory_lock_shared',\r\n        'pg_advisory_unlock',\r\n        'pg_advisory_unlock_all',\r\n        'pg_advisory_unlock_shared',\r\n        'pg_advisory_xact_lock',\r\n        'pg_advisory_xact_lock_shared',\r\n        'pg_backup_start_time',\r\n        'pg_blocking_pids',\r\n        'pg_client_encoding',\r\n        'pg_collation_is_visible',\r\n        'pg_column_size',\r\n        'pg_conf_load_time',\r\n        'pg_control_checkpoint',\r\n        'pg_control_init',\r\n        'pg_control_recovery',\r\n        'pg_control_system',\r\n        'pg_conversion_is_visible',\r\n        'pg_create_logical_replication_slot',\r\n        'pg_create_physical_replication_slot',\r\n        'pg_create_restore_point',\r\n        'pg_current_xlog_flush_location',\r\n        'pg_current_xlog_insert_location',\r\n        'pg_current_xlog_location',\r\n        'pg_database_size',\r\n        'pg_describe_object',\r\n        'pg_drop_replication_slot',\r\n        'pg_export_snapshot',\r\n        'pg_filenode_relation',\r\n        'pg_function_is_visible',\r\n        'pg_get_constraintdef',\r\n        'pg_get_expr',\r\n        'pg_get_function_arguments',\r\n        'pg_get_function_identity_arguments',\r\n        'pg_get_function_result',\r\n        'pg_get_functiondef',\r\n        'pg_get_indexdef',\r\n        'pg_get_keywords',\r\n        'pg_get_object_address',\r\n        'pg_get_owned_sequence',\r\n        'pg_get_ruledef',\r\n        'pg_get_serial_sequence',\r\n        'pg_get_triggerdef',\r\n        'pg_get_userbyid',\r\n        'pg_get_viewdef',\r\n        'pg_has_role',\r\n        'pg_identify_object',\r\n        'pg_identify_object_as_address',\r\n        'pg_index_column_has_property',\r\n        'pg_index_has_property',\r\n        'pg_indexam_has_property',\r\n        'pg_indexes_size',\r\n        'pg_is_in_backup',\r\n        'pg_is_in_recovery',\r\n        'pg_is_other_temp_schema',\r\n        'pg_is_xlog_replay_paused',\r\n        'pg_last_committed_xact',\r\n        'pg_last_xact_replay_timestamp',\r\n        'pg_last_xlog_receive_location',\r\n        'pg_last_xlog_replay_location',\r\n        'pg_listening_channels',\r\n        'pg_logical_emit_message',\r\n        'pg_logical_slot_get_binary_changes',\r\n        'pg_logical_slot_get_changes',\r\n        'pg_logical_slot_peek_binary_changes',\r\n        'pg_logical_slot_peek_changes',\r\n        'pg_ls_dir',\r\n        'pg_my_temp_schema',\r\n        'pg_notification_queue_usage',\r\n        'pg_opclass_is_visible',\r\n        'pg_operator_is_visible',\r\n        'pg_opfamily_is_visible',\r\n        'pg_options_to_table',\r\n        'pg_postmaster_start_time',\r\n        'pg_read_binary_file',\r\n        'pg_read_file',\r\n        'pg_relation_filenode',\r\n        'pg_relation_filepath',\r\n        'pg_relation_size',\r\n        'pg_reload_conf',\r\n        'pg_replication_origin_create',\r\n        'pg_replication_origin_drop',\r\n        'pg_replication_origin_oid',\r\n        'pg_replication_origin_progress',\r\n        'pg_replication_origin_session_is_setup',\r\n        'pg_replication_origin_session_progress',\r\n        'pg_replication_origin_session_reset',\r\n        'pg_replication_origin_session_setup',\r\n        'pg_replication_origin_xact_reset',\r\n        'pg_replication_origin_xact_setup',\r\n        'pg_rotate_logfile',\r\n        'pg_size_bytes',\r\n        'pg_size_pretty',\r\n        'pg_sleep',\r\n        'pg_sleep_for',\r\n        'pg_sleep_until',\r\n        'pg_start_backup',\r\n        'pg_stat_file',\r\n        'pg_stop_backup',\r\n        'pg_switch_xlog',\r\n        'pg_table_is_visible',\r\n        'pg_table_size',\r\n        'pg_tablespace_databases',\r\n        'pg_tablespace_location',\r\n        'pg_tablespace_size',\r\n        'pg_total_relation_size',\r\n        'pg_trigger_depth',\r\n        'pg_try_advisory_lock',\r\n        'pg_try_advisory_lock_shared',\r\n        'pg_try_advisory_xact_lock',\r\n        'pg_try_advisory_xact_lock_shared',\r\n        'pg_ts_config_is_visible',\r\n        'pg_ts_dict_is_visible',\r\n        'pg_ts_parser_is_visible',\r\n        'pg_ts_template_is_visible',\r\n        'pg_type_is_visible',\r\n        'pg_typeof',\r\n        'pg_xact_commit_timestamp',\r\n        'pg_xlog_location_diff',\r\n        'pg_xlog_replay_pause',\r\n        'pg_xlog_replay_resume',\r\n        'pg_xlogfile_name',\r\n        'pg_xlogfile_name_offset',\r\n        'phraseto_tsquery',\r\n        'plainto_tsquery',\r\n        'point',\r\n        'polygon',\r\n        'popen',\r\n        'pqserverversion',\r\n        'query_to_xml',\r\n        'querytree',\r\n        'quote_nullable',\r\n        'radius',\r\n        'range_merge',\r\n        'regexp_matches',\r\n        'regexp_split_to_array',\r\n        'regexp_split_to_table',\r\n        'regr_avgx',\r\n        'regr_avgy',\r\n        'regr_count',\r\n        'regr_intercept',\r\n        'regr_r2',\r\n        'regr_slope',\r\n        'regr_sxx',\r\n        'regr_sxy',\r\n        'regr_syy',\r\n        'right',\r\n        'row_security_active',\r\n        'row_to_json',\r\n        'rpad',\r\n        'scale',\r\n        'set_masklen',\r\n        'setseed',\r\n        'setval',\r\n        'setweight',\r\n        'shobj_description',\r\n        'sind',\r\n        'sprintf',\r\n        'statement_timestamp',\r\n        'stddev',\r\n        'string_agg',\r\n        'string_to_array',\r\n        'strip',\r\n        'substr',\r\n        'table_to_xml',\r\n        'table_to_xml_and_xmlschema',\r\n        'tand',\r\n        'text',\r\n        'to_json',\r\n        'to_regclass',\r\n        'to_regnamespace',\r\n        'to_regoper',\r\n        'to_regoperator',\r\n        'to_regproc',\r\n        'to_regprocedure',\r\n        'to_regrole',\r\n        'to_regtype',\r\n        'to_tsquery',\r\n        'to_tsvector',\r\n        'transaction_timestamp',\r\n        'ts_debug',\r\n        'ts_delete',\r\n        'ts_filter',\r\n        'ts_headline',\r\n        'ts_lexize',\r\n        'ts_parse',\r\n        'ts_rank',\r\n        'ts_rank_cd',\r\n        'ts_rewrite',\r\n        'ts_stat',\r\n        'ts_token_type',\r\n        'tsquery_phrase',\r\n        'tsvector_to_array',\r\n        'tsvector_update_trigger',\r\n        'tsvector_update_trigger_column',\r\n        'txid_current',\r\n        'txid_current_snapshot',\r\n        'txid_snapshot_xip',\r\n        'txid_snapshot_xmax',\r\n        'txid_snapshot_xmin',\r\n        'txid_visible_in_snapshot',\r\n        'unnest',\r\n        'upper_inc',\r\n        'upper_inf',\r\n        'variance',\r\n        'width',\r\n        'width_bucket',\r\n        'xml_is_well_formed',\r\n        'xml_is_well_formed_content',\r\n        'xml_is_well_formed_document',\r\n        'xmlagg',\r\n        'xmlcomment',\r\n        'xmlconcat',\r\n        'xmlelement',\r\n        'xmlexists',\r\n        'xmlforest',\r\n        'xmlparse',\r\n        'xmlpi',\r\n        'xmlroot',\r\n        'xmlserialize',\r\n        'xpath',\r\n        'xpath_exists'\r\n    ],\r\n    builtinVariables: [\r\n    // NOT SUPPORTED\r\n    ],\r\n    pseudoColumns: [\r\n    // NOT SUPPORTED\r\n    ],\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@comments' },\r\n            { include: '@whitespace' },\r\n            { include: '@pseudoColumns' },\r\n            { include: '@numbers' },\r\n            { include: '@strings' },\r\n            { include: '@complexIdentifiers' },\r\n            { include: '@scopes' },\r\n            [/[;,.]/, 'delimiter'],\r\n            [/[()]/, '@brackets'],\r\n            [\r\n                /[\\w@#$]+/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': 'keyword',\r\n                        '@operators': 'operator',\r\n                        '@builtinVariables': 'predefined',\r\n                        '@builtinFunctions': 'predefined',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            [/[<>=!%&+\\-*/|~^]/, 'operator']\r\n        ],\r\n        whitespace: [[/\\s+/, 'white']],\r\n        comments: [\r\n            [/--+.*/, 'comment'],\r\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\r\n        ],\r\n        comment: [\r\n            [/[^*/]+/, 'comment'],\r\n            // Not supporting nested comments, as nested comments seem to not be standard?\r\n            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic\r\n            // [/\\/\\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(\r\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\r\n            [/./, 'comment']\r\n        ],\r\n        pseudoColumns: [\r\n            [\r\n                /[$][A-Za-z_][\\w@#$]*/,\r\n                {\r\n                    cases: {\r\n                        '@pseudoColumns': 'predefined',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ]\r\n        ],\r\n        numbers: [\r\n            [/0[xX][0-9a-fA-F]*/, 'number'],\r\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\r\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\r\n        ],\r\n        strings: [[/'/, { token: 'string', next: '@string' }]],\r\n        string: [\r\n            [/[^']+/, 'string'],\r\n            [/''/, 'string'],\r\n            [/'/, { token: 'string', next: '@pop' }]\r\n        ],\r\n        complexIdentifiers: [[/\"/, { token: 'identifier.quote', next: '@quotedIdentifier' }]],\r\n        quotedIdentifier: [\r\n            [/[^\"]+/, 'identifier'],\r\n            [/\"\"/, 'identifier'],\r\n            [/\"/, { token: 'identifier.quote', next: '@pop' }]\r\n        ],\r\n        scopes: [\r\n        // NOT SUPPORTED\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js?");

/***/ })

}]);