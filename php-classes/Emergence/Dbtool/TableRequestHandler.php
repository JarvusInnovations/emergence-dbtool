<?php

namespace Emergence\Dbtool;

use DB;

class TableRequestHandler extends \RequestHandler
{
    static public function handleRequest()
    {
        $db = $_REQUEST['db'];
        $table = $_REQUEST['table'];
        $recs = [];

        DB::nonQuery('use '.$db);

        $results = DB::Query('Select * from '.$table);
        while ($record = $results->fetch_assoc()) {
            array_push($recs,$record);
        }

        static::respondJson('null', $recs);

    }

}
